'use client';
import CharacterCard from '@/components/CharacterCard';
import { Film } from '@/models';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function FilmDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Film>({
    title: '',
    episode_id: 0,
    director: '',
    characters_id: [],
    url: '',
    id: '',
  });
  useEffect(() => {
    fetch('/api/films?id=' + id)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <>
          <section className='grid grid-cols-1 sm:grid-cols-2 mb-14 gap-4'>
            <div className='relative w-full max-w-sm aspect-square ml-auto'>
              <Image
                src='/imageFilms.webp'
                fill
                priority
                sizes='100%'
                className='object-fill '
                alt={`Image of film ${data.title}`}
                title={`Image of film ${data.title}`}
              />
            </div>
            <div className='text-start '>
              <h3 className='text-2xl font-bold'>{data.title}</h3>
              <p>Director: {data.director}</p>
              <p>Episode: {data.episode_id}</p>
            </div>
          </section>
          <h4 className='text-xl font-semibold'>Characters</h4>
          <section className='flex flex-nowrap w-full overflow-x-scroll gap-3 p-3'>
            {data.characters_id.map((character, index) => (
              <CharacterCard id={character} key={index} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
