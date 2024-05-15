import { ChildrenProps } from '@/models';
import React from 'react';

export default function layout({ children }: ChildrenProps) {
  return (
    <main className='bg-black flex-grow text-white p-10 flex flex-col'>
      {children}
    </main>
  );
}
