import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Home | Sandip Das',
  description:
    'I am a Fulstack Developer and I provide high-end and up-to-date designs and developments using the latest tools and technology available.',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body className={`antialiased bg-black text-white`}>
        <Header />
        {children}
        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              // background: '#363636',
              // color: '#fff',
              fontSize: 13,
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
