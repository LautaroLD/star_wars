'use client';
import { Film, Character } from '@/models';
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
        console.log(data);
      });
  }, []);

  return (
    <div>
      {!loading && (
        <>
          <p>{data.name}</p>
          <p>{data.gender}</p>
          <p>{data.eye_color}</p>
          <p>{data.birth_year}</p>
          <p>{data.height}</p>
          <p>{data.mass}</p>
          <p>{data.skin_color}</p>
          <p>{data.hair_color}</p>
        </>
      )}
    </div>
  );
}
