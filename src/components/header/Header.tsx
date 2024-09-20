'use client';

import { links } from '@/utils/navLinks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const pathname = usePathname();
  const [isMNVisible, setIsMNVisible] = useState<boolean>(false);

  const handleHideMobileNav = () => {
    setIsMNVisible(false);
  };

  const handleToggleMobileNav = () => {
    setIsMNVisible((prev) => !prev);
  };

  return (
    <>
      <header className='fixed w-full border-b border-gray-100/10 bg-gray-900/40 backdrop-blur z-[9]'>
        <div className='flex gap-4 md:gap-8 items-center justify-between custom-container text-white py-4'>
          <div className='shrink-0'>
            <Link href='/' onClick={handleHideMobileNav}>
              <Image
                src='/assets/images/profile-picture.jpg'
                height={45}
                width={45}
                quality={100}
                alt='Sandip Das'
                className='w-[45px] h-auto rounded-full'
              />
            </Link>
          </div>
          <div className='flex-1 hidden md:flex'>
            <nav className='flex-1 flex justify-end items-center gap-12'>
              {links?.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`${
                    pathname === link.link ? 'text-primary' : 'text-white/80'
                  } hover:text-primary transition-all text-base font-normal`}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className='shrink-0 hidden md:flex'>
            <Link
              href='/assets/pdfs/resume.pdf'
              className='button-rainbow ml-4 whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-black'
              target='_blank'
            >
              Resume
            </Link>
          </div>
          <div className='shrink-0 md:hidden'>
            <button
              onClick={handleToggleMobileNav}
              className='flex items-center text-primary'
            >
              <FiMenu size={30} />
            </button>
          </div>
        </div>
      </header>

      {isMNVisible && (
        <nav className='bg-white fixed w-full top-[76px] rounded-b-sm transition-all z-[9]'>
          {links?.map((link) => (
            <Link
              onClick={handleHideMobileNav}
              key={link.id}
              href={link.link}
              className={`block py-3 px-4 ${
                pathname === link.link ? 'text-primary' : 'text-black'
              } hover:text-primary transition-all text-base font-normal`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            onClick={handleHideMobileNav}
            href='/assets/pdfs/resume.pdf'
            className={`block py-3 px-4 text-black hover:text-primary transition-all text-base font-normal`}
          >
            Resume
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
