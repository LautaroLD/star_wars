import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='bg-black flex justify-center p-3'>
      <Link href={'/'} className='w-1/4 max-w-[130px] aspect-video relative'>
        <Image
          src='/star-wars-logo.webp'
          fill
          priority
          sizes='100%'
          alt='Star wars logo'
          title='Star wars logo'
          className=''
        />
      </Link>
    </header>
  );
}
