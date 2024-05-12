import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <main className='flex-grow flex'>
      <h1 className='absolute top-[15%] inset-x-0 mx-auto w-fit z-10 font-bold text-2xl px-3 py-1 bg-black text-[#dba90c]'>
        Chose one option
      </h1>
      <section className='flex flex-grow w-full overflow-hidden'>
        <Link
          href={'/people'}
          className='w-1/2 flex items-center justify-center border-r-[#dba90c] relative grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105'
        >
          <Image
            src='/bg_landing_1.webp'
            fill
            className='object-cover'
            alt='back image of characters section'
            title='back image of characters section'
          />
          <p className='z-10 font-bold text-base px-3 py-1 bg-black text-[#dba90c]'>
            CHARACTERS
          </p>
        </Link>
        <Link
          href={'/films'}
          className='w-1/2 flex items-center justify-center relative grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300'
        >
          <Image
            src='/bg_landing_2.webp'
            fill
            className='object-cover'
            alt='back image of films section'
            title='back image of films section'
          />
          <p className='z-10 font-bold text-base px-3 py-1 bg-black text-[#dba90c]'>
            FILMS
          </p>
        </Link>
      </section>
    </main>
  );
}
