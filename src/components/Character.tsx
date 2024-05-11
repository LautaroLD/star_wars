import { Character } from '@/models';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CharacterCard({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Character>({});
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
    >
      <p>{data.name}</p>
    </Link>
  );
}
