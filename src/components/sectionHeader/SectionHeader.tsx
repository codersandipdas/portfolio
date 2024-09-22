import Link from 'next/link';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

type Props = {
  subtitle: string;
  title: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

const SectionHeader: React.FC<Props> = ({
  subtitle,
  title,
  ctaText,
  ctaLink,
  className = '',
}) => {
  const hasCTA = Boolean(ctaText && ctaLink);

  return (
    <div
      className={`flex gap-4 md:items-center flex-col md:flex-row mb-8 ${className}`}
    >
      <div className='flex-1'>
        <h3 className='subheading'>{subtitle}</h3>
        <h2 className='heading text-white mt-2'>{title}</h2>
      </div>
      {hasCTA && (
        <Link
          href={ctaLink!}
          className='text-base font-semibold text-primary hover:text-primary/90 flex items-center gap-1 transition-all'
        >
          <span>{ctaText}</span>
          <IoArrowForward />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
