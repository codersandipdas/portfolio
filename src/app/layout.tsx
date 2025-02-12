import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@next/third-parties/google';
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
      <GoogleTagManager gtmId='GTM-WN35RC9P' />
      <body className={`antialiased bg-black text-white`}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WN35RC9P'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

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
