'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialButton from '../socialButton/SocialButton';
import { FaGithub } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';

interface Props {
  title: string;
  thumbnail: string;
  slug: string;
  excerpt: string;
  tags?: string[];
  githubLink?: string;
}

const ProjectCard = ({
  title,
  thumbnail,
  slug,
  excerpt,
  tags = [],
  githubLink,
}: Props) => {
  return (
    <article className='group bg-gray-900 text-white relative border-2 shadow-2xl drop-shadow-lg border-gray-600/40 rounded-xl p-3 overflow-hidden'>
      <div className='w-full aspect-video rounded overflow-hidden relative'>
        <Image
          src={thumbnail}
          alt={title}
          height={200}
          width={400}
          quality={100}
          className='bg-slate-800 w-full h-full object-cover object-center group-hover:scale-[1.2] transition-transform duration-500'
        />
        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-b from-transparent from-10% to-gray-900/40 to-90%'></div>
      </div>

      <h3 className='mt-5 text-xl font-bold line-clamp-2'>{title}</h3>

      {tags?.length > 0 && (
        <div className='flex gap-2 flex-wrap items-center my-2'>
          {tags?.map((tag) => (
            <p
              className='rounded bg-white/10 py-[3px] px-1.5 text-sm font-medium'
              key={tag}
            >
              {tag}
            </p>
          ))}
        </div>
      )}

      <p className='mt-1 text-sm text-white/60 line-clamp-4'>{excerpt}</p>

      <div className='flex gap-2 items-center justify-between mt-3'>
        <SocialButton
          title='Read More'
          href={slug}
          icon={<IoArrowForward />}
          target='_self'
          className='flex-row-reverse !bg-transparent !px-0'
          titleClassName='!text-primary'
        />
        {githubLink && (
          <SocialButton
            title='View repository'
            href={githubLink}
            icon={<FaGithub />}
            showTitle={false}
            className='flex-row-reverse !bg-transparent !p-0'
          />
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
