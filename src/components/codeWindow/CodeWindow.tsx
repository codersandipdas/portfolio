'use client';
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `import { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find opportunities"
    | "find a fulltime job";
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </>
  );
};

export default Welcome;`;

export const CodeWindow = () => {
  return (
    <div className='relative w-full h-full overflow-hidden rounded-md border-2 bg-gray-900 p-2.5 shadow-2xl drop-shadow-lg border-gray-600/40'>
      <div className='mb-2 flex items-center border-b border-b-gray-800 pb-2'>
        <div className='shrink-0 flex gap-2 items-center'>
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#d85146]' />
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#F4BF50]' />
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#61C454]' />
        </div>
        <div className='flex-1  select-none text-center text-[13px] leading-none tracking-wide text-gray-500'>
          /index.tsx
        </div>
        <div className='shrink-0 flex gap-2 items-center'>
          <button className='text-gray-500 hover:text-white h-5 w-5 transition-colors'>
            <span className='sr-only'>Copy</span>
            <FaCopy />
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        showLineNumbers={false}
        wrapLines
        language='tsx'
        style={vscDarkPlus}
        customStyle={{
          padding: 0,
          backgroundColor: 'transparent',
          fontSize: 13,
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
