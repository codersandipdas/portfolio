'use client';
import React from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
  showTitle?: boolean;
  className?: string;
  titleClassName?: string;
  onClick: () => void;
}

const SocialButton = ({
  title,
  icon,
  showTitle = true,
  className = '',
  titleClassName = '',
  onClick,
}: Props) => {
  return (
    <button
      title={title}
      className={`flex gap-2 items-center border border-white/5 bg-white/5 hover:bg-white/15 px-5 py-2.5 rounded-md transition-all ${className}`}
      onClick={onClick}
    >
      <span className='text-primary text-lg'>{icon}</span>
      {showTitle && (
        <span className={`text-sm font-normal text-white ${titleClassName}`}>
          {title}
        </span>
      )}
    </button>
  );
};

export default SocialButton;
