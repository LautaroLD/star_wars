'use client';
import CharacterCard from '@/components/Character';
import { Film } from '@/models';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function FilmDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Film>({});
  useEffect(() => {
    fetch('/api/films?id=' + id)
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {!loading && (
        <>
          <p>{data.title}</p>
          {/* <p>{data.characters}</p> */}
          <p>{data.director}</p>
          <p>{data.episode_id}</p>
          {data.characters_id.map((character, index) => (
            <CharacterCard id={character} key={index} />
          ))}
        </>
      )}
    </div>
  );
}
