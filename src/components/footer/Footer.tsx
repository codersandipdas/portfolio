import { socials } from '@/utils/socials';
import React from 'react';
import SocialButton from '../socialButton/SocialButton';

const Footer = () => {
  return (
    <footer className='py-12 text-sm'>
      <div className='flex gap-6 flex-col-reverse md:flex-row items-center justify-between custom-container text-gray-500'>
        <div>
          &copy; {new Date().getFullYear()}{' '}
          <span className='text-primary'>Sandip Das</span>, All rights reserved.
        </div>
        <div className='flex items-center gap-4'>
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
      </div>
    </footer>
  );
};

export default Footer;
