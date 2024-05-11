'use client';
import { Character } from '@/models';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PeoplePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Character[]>([]);
  useEffect(() => {
    fetch('/api/people')
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <main>
      {!loading &&
        data?.map((people: Character, index) => (
          <Link
            className='m-2 flex flex-col border'
            href={`people/${people.id}`}
            key={'people-' + index}
          >
            <p>{people.name}</p>
            <p>{people.eye_color}</p>
            <p>{people.gender}</p>
          </Link>
        ))}
    </main>
  );
}
