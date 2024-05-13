import { Character } from '@/models/index';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id') ?? '';
  const next = new URL(req.url).searchParams.get('next') ?? '';
  const res = await fetch(id ? `https://swapi.dev/api/people/${id}` : next);
  const data = await res.json();
  if (data.results) {
    return Response.json({
      next: data.next,
      data: data.results.map((character: Character): Partial<Character> => {
        const parts = character.url.split('/');
        parts.pop();
        const id = parts.pop();

        let dataFiltered: Partial<Character> = {};
        for (const key in character) {
          if (character[key] !== 'n/a' && character[key] !== 'unknown') {
            dataFiltered[key] = character[key];
          }
        }
        return {
          name: dataFiltered.name,
          eye_color: dataFiltered.eye_color,
          gender: dataFiltered.gender,
          id: id,
        };
      }),
    });
  } else {
    let dataFiltered: Partial<Character> = {};
    for (const key in data) {
      if (data[key] !== 'n/a' && data[key] !== 'unknown') {
        dataFiltered[key] = data[key];
      }
    }
    return Response.json({ data: dataFiltered });
  }
}
