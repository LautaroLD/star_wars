'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

export default function ArrowBackComponent() {
  const path = usePathname();
  const route = useRouter();
  return (
    <div className='my-auto absolute inset-y-0 flex items-center'>
      {path !== '/' && (
        <span className='cursor-pointer' onClick={() => route.back()}>
          <BiArrowBack color='white' size={30} />{' '}
        </span>
      )}
    </div>
  );
}
