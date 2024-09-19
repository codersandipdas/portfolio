import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Sandip Das',
  description: 'Coder Sandip Das Portfolio',
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
