'use client';
import Loading from '@/components/shared/Loading';
import { Character } from '@/models';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function CharacterDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Character>({
    name: '',
    gender: '',
    eye_color: '',
    birth_year: '',
    hair_color: '',
    height: '',
    skin_color: '',
    mass: '',
    url: '',
    id: '',
  });
  useEffect(() => {
    fetch('/api/people?id=' + id)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <section className='grid grid-cols-1 sm:grid-cols-2 mb-14 gap-4'>
          <div className='relative w-full max-w-sm aspect-square ml-auto'>
            <Image
              src='/imageCharacter.webp'
              fill
              priority
              sizes='100%'
              className='object-fill '
              alt={`Image of film ${data.name}`}
              title={`Image of film ${data.name}`}
            />
          </div>
          <div className='flex flex-col text-start gap-2'>
            <h3 className='text-2xl font-bold'>{data.name}</h3>
            <p>
              Eye color:<b> {data.eye_color}</b>
            </p>
            <p>
              Birth year:<b> {data.birth_year}</b>
            </p>
            <p>
              Hair color:<b> {data.hair_color}</b>
            </p>
            <p>
              Height:<b> {data.height}</b>
            </p>
            <p>
              Mass:<b> {data.mass}</b>
            </p>
            <p>
              Skin color:<b> {data.skin_color}</b>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
// </>
// );
// }
