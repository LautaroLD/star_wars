'use client';
import { useFetchPeople } from '@/hooks/FetchPeople';
import { Character } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Loading from './shared/Loading';

export default function CharactersList() {
  const { getPeople } = useFetchPeople();
  const [loading, setLoading] = useState(true);
  const next = useRef('https://swapi.dev/api/people');
  const [data, setData] = useState<Character[]>([]);
  useEffect(() => {
    getPeople({ next, setData, setLoading });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <section className='grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl m-auto relative min-h-svh'>
        {!loading &&
          data?.map((character: Character) => (
            <Link
              href={`people/${character.id}`}
              key={'character-' + character.id}
              className=' border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'
            >
              <div className='relative w-full aspect-square '>
                <Image
                  src='/imageCharacter.webp'
                  fill
                  sizes='100%'
                  priority
                  className='object-fill'
                  alt={`Image of character ${character.name}`}
                  title={`Image of character ${character.name}`}
                />
              </div>
              <div className='m-3'>
                <b>{character.name}</b>
                <p>Eye color: {character.eye_color}</p>
                {character.gender && <p>Gender: {character.gender}</p>}
              </div>
            </Link>
          ))}
      </section>
      <div id='targetElement' className='h-4 w-full my-5 justify-center flex'>
        {next.current !== null && (
          <button
            className='bg-[#dba90c] text-black px-4 py-1 h-min rounded-xl font-semibold'
            onClick={() => getPeople({ next, setData, setLoading })}
          >
            More
          </button>
        )}
      </div>
    </>
  );
}
