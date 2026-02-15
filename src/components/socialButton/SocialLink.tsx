import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  showTitle?: boolean;
  target?: string;
  className?: string;
  titleClassName?: string;
}

const SocialLink = ({
  title,
  href,
  icon,
  showTitle = true,
  target = '_blank',
  className = '',
  titleClassName = '',
}: Props) => {
  return (
    <Link
      title={title}
      href={href}
      target={target}
      className={`flex gap-2 items-center border border-white/5 bg-white/5 hover:bg-white/15 px-5 py-2.5 rounded-md transition-all ${className}`}
    >
      <span className='text-primary text-lg'>{icon}</span>
      {showTitle && (
        <span className={`text-sm font-normal text-white ${titleClassName}`}>
          {title}
        </span>
      )}
    </Link>
  );
};

export default SocialLink;
