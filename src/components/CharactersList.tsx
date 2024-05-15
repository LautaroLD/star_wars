'use client';
import { Character } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
export default function CharactersList({ list }: { list: Character[] }) {
  const [limitItems, setLimitItems] = useState(10);

  return (
    <>
      <section className='grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full m-auto relative flex-grow'>
        {!list.length && (
          <div className='absolute inset-0 flex justify-center items-center'>
            <p className='font-bold text-lg'>No results have been found.</p>
          </div>
        )}
        {list?.map((character: Character, index: number) => {
          if (index < limitItems) {
            return (
              <Link
                href={`people/${character.id}`}
                key={'character-' + character.id}
                className=' border rounded-2xl overflow-hidden h-min hover:scale-105 transition-all duration-300'
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
            );
          }
        })}
      </section>
      <div id='targetElement' className='h-4 w-full my-5 justify-center flex'>
        {list.length > limitItems && (
          <button
            className='bg-[#dba90c] text-black px-4 py-1 h-min rounded-xl font-semibold'
            onClick={() =>
              setLimitItems((prevState) => {
                return prevState + 10;
              })
            }
          >
            More
          </button>
        )}
      </div>
    </>
  );
}
