import { Character } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CharacterCard({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Partial<Character>>({});
  useEffect(() => {
    fetch('/api/people?id=' + id)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Link
      href={`
    /people/${id}`}
      className='min-w-36 border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'
    >
      <div className='relative w-full aspect-square '>
        <Image
          src='/imageCharacter.webp'
          fill
          className='object-fill'
          alt={`Image of character ${data.name}`}
          title={`Image of character ${data.name}`}
        />
      </div>
      <p className='text-center p-2'>{data.name}</p>
    </Link>
  );
}
