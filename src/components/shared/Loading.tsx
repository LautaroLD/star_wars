import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className='flex absolute inset-0'>
      <AiOutlineLoading size={50} className=' animate-spin  m-auto' />
    </div>
  );
}
