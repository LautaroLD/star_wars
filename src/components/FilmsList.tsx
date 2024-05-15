'use client';
import { Film } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function FilmsList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Film[]>([]);
  useEffect(() => {
    fetch('/api/films')
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <article className='grid grid-cols-2 sm:grid-cols-3 max-w-lg m-auto gap-3'>
      {!loading &&
        data?.map((film: Film) => (
          <Link
            href={`films/${film.id}`}
            key={'film-' + film.id}
            className=' border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'
          >
            <div className='relative w-full aspect-square '>
              <Image
                src='/imageFilms.webp'
                fill
                priority
                sizes='100%'
                className='object-fill'
                alt={`Image of film ${film.title}`}
                title={`Image of film ${film.title}`}
              />
            </div>
            <div className='m-3'>
              <b>{film.title}</b>
              <p>Episode: {film.episode_id}</p>
            </div>
          </Link>
        ))}
    </article>
  );
}
