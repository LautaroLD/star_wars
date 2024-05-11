import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className='bg-black flex justify-center p-1'>
      <div className='w-1/4 max-w-[130px] aspect-video relative'>
        <Image
          src='/star-wars-logo.webp'
          fill
          alt='Star wars logo'
          title='Star wars logo'
          className=''
        />
      </div>
    </header>
  );
}
