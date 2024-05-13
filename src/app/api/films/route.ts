import { Film } from '@/models/index';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id') ?? '';

  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await res.json();
  if (data.results) {
    return Response.json({
      data: data.results.map((film: Film): Partial<Film> => {
        const parts = film.url.split('/');
        parts.pop();
        const id = parts.pop();
        return {
          title: film.title,
          episode_id: film.episode_id,
          id: id,
        };
      }),
    });
  } else {
    return Response.json({
      data: {
        title: data.title,
        episode_id: data.episode_id,
        director: data.director,
        characters_id: data.characters.map((character: string) => {
          const parts = character.split('/');
          parts.pop();
          const id = parts.pop();
          return id;
        }),
      },
    });
  }
}
