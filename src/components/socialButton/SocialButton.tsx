import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  showTitle?: boolean;
  className?: string;
}

const SocialButton = ({
  title,
  href,
  icon,
  showTitle = true,
  className = '',
}: Props) => {
  return (
    <Link
      title={title}
      href={href}
      target='_blank'
      className={`flex gap-2 items-center bg-white/10 hover:bg-white/15 px-2 py-1.5 rounded-md transition-all ${className}`}
    >
      <span className='text-primary text-lg'>{icon}</span>
      {showTitle && (
        <span className='text-sm font-normal text-white'>{title}</span>
      )}
    </Link>
  );
};

export default SocialButton;
