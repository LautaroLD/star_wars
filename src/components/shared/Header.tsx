import Image from 'next/image';
import React from 'react';
import ArrowBackComponent from './ArrowBackComponent';

export default function Header() {
  return (
    <header className='bg-black flex  p-3 relative'>
      <ArrowBackComponent />
      <div className='w-1/4 max-w-[130px] aspect-video relative mx-auto'>
        <Image
          src='/star-wars-logo.webp'
          fill
          priority
          sizes='100%'
          alt='Star wars logo'
          title='Star wars logo'
          className=''
        />
      </div>
    </header>
  );
}
