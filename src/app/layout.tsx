import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ChildrenProps } from '@/models';

export const metadata: Metadata = {
  title: 'Star Wars',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en'>
      <body className='min-h-dvh flex flex-col'>
        <Header />
        {children}
      </body>
    </html>
  );
}
