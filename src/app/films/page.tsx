'use client';
import { Film } from '@/models';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function FilmsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Film[]>([]);
  useEffect(() => {
    fetch('/api/films')
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {!loading &&
        data?.map((film: Film) => (
          <Link href={`films/${film.id}`} key={'film-' + film.id}>
            <p>{film.title}</p>
            <p>{film.episode_id}</p>
          </Link>
        ))}
    </div>
  );
}
