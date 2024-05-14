import { Character } from '@/models/index';
import { NextRequest } from 'next/server';

const filterData = (data: Character): Partial<Character> => {
  let dataFiltered: Partial<Character> = {};
  for (const key in data) {
    if (data[key] !== 'n/a' && data[key] !== 'unknown') {
      dataFiltered[key] = data[key];
    }
  }
  return dataFiltered;
};

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  parts.pop();
  return parts.pop() ?? '';
};

export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id') ?? '';
  const next = new URL(req.url).searchParams.get('next') ?? '';
  try {
    const res = await fetch(id ? `https://swapi.dev/api/people/${id}` : next);
    const data = await res.json();
    if (data.results) {
      return Response.json({
        next: data.next,
        data: data.results.map((character: Character): Partial<Character> => {
          const filteredData = filterData(character);
          return {
            ...filteredData,
            id: getIdFromUrl(character.url),
          };
        }),
      });
    } else {
      return Response.json({ data: filterData(data) });
    }
  } catch (error) {
    console.log(error);
  }
}
