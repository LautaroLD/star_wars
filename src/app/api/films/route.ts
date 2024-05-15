import { Film } from '@/models/index';
import { NextRequest } from 'next/server';

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  parts.pop();
  return parts.pop() ?? '';
};

export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id') ?? '';

  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await res.json();
  if (data.results) {
    return Response.json({
      data: data.results.map((film: Film): Partial<Film> => {
        return {
          title: film.title,
          episode_id: film.episode_id,
          id: getIdFromUrl(film.url),
        };
      }),
    });
  } else {
    return Response.json({
      data: {
        title: data.title,
        episode_id: data.episode_id,
        director: data.director,
        characters_id: data.characters.map(getIdFromUrl),
      },
    });
  }
}
