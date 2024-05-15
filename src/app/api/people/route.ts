import { filterData } from '@/hooks/useFilterData';
import { Character } from '@/models/index';
import { NextRequest } from 'next/server';

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
          return filteredData;
        }),
      });
    } else {
      return Response.json({ data: filterData(data) });
    }
  } catch (error) {
    console.log(error);
  }
}
