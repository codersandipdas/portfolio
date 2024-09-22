'use client';

import { links } from '@/utils/navLinks';
import { socials } from '@/utils/socials';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });
import 'react-modern-drawer/dist/index.css';
import SocialButton from '../socialButton/SocialButton';

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
                className='w-[45px] h-auto rounded-full bg-slate-800'
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
              // className='button-rainbow ml-4 whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-black'
              className='btn-rainbow'
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

      <Drawer
        direction='right'
        onClose={handleHideMobileNav}
        open={isMNVisible}
        size='70vw'
        lockBackgroundScroll
        className='!bg-slate-900'
      >
        <div className='text-white/50 py-3 px-2'>
          <button
            className='flex items-center justify-center size-[30px]'
            onClick={handleHideMobileNav}
          >
            <CgClose size={20} />
          </button>
        </div>

        <hr className='border-white/10 mb-2' />

        {links?.map((link) => (
          <Link
            onClick={handleHideMobileNav}
            key={link.id}
            href={link.link}
            className={`block py-3 px-4 ${
              pathname === link.link ? 'text-primary' : 'text-white/50'
            } transition-all text-base font-medium`}
          >
            {link.title}
          </Link>
        ))}
        <Link
          onClick={handleHideMobileNav}
          href='/assets/pdfs/resume.pdf'
          className={`block py-3 px-4 text-white/50 transition-all text-base font-medium`}
        >
          Resume
        </Link>

        <div className='flex items-center gap-4 px-4 py-4'>
          {socials.map((social) => (
            <SocialButton
              key={social.id}
              title={social.title}
              href={social.link}
              icon={social.icon}
              showTitle={false}
            />
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
