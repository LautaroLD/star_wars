import { Film, Character } from '@/models/index';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id') ?? '';

  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  console.log(data);

  if (data.results) {
    return Response.json({
      data: data.results.map((people: Character): Partial<Character> => {
        const parts = people.url.split('/');
        parts.pop();
        const id = parts.pop();
        return {
          name: people.name,
          eye_color: people.eye_color,
          gender: people.gender,
          id: id,
        };
      }),
    });
  } else {
    return Response.json({
      data: {
        name: data.name,
        gender: data.gender,
        eye_color: data.eye_color,
        birth_year: data.birth_year,
        hair_color: data.hair_color,
        height: data.height,
        skin_color: data.skin_color,
        mass: data.mass,
      },
    });
  }
}
