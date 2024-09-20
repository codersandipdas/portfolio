import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='fixed w-full border-b border-gray-100/10 bg-gray-900/40 backdrop-blur'>
      <div className='flex gap-4 md:gap-8 items-center custom-container text-white py-4'>
        <div className=''>
          <Link href='/'>
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
        <div className='flex-1'>Logo</div>
        <div className=''>
          <Link
            href='/assets/pdfs/resume.pdf'
            className='button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-black md:flex'
            target='_blank'
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
