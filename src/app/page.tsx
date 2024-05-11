import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <section>
        <Link href={'/people'}>
          <p>characters</p>
        </Link>
        <Link href={'/films'}>
          <p>films</p>
        </Link>
      </section>
    </main>
  );
}
