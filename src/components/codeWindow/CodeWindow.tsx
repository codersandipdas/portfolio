'use client';
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import toast from 'react-hot-toast';

const codeString = `const coder = {
  name: 'Sandip Das',
  skills: [
    'HTML', 'CSS',
    'Tailwind CSS',
    'Javascript',
    'React.js',
    'React Native',
    'Svelte.js',
    'Next.js', 'Node.js',
    'Express.js',
    'Nest.js', 'MongoDB',
    'Git', '...everythingNice',
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  },
};`;

export const CodeWindow = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      toast.success('Code copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className='relative w-full h-full overflow-hidden rounded-md border-2 bg-gray-900 md:bg-white/5 p-2.5 shadow-2xl drop-shadow-lg border-gray-600/40 backdrop-blur-xl'>
      <div className='mb-2 flex items-center border-b border-b-gray-800 pb-2'>
        <div className='shrink-0 flex gap-2 items-center min-w-[60px]'>
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#d85146]' />
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#F4BF50]' />
          <button className='h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#61C454]' />
        </div>
        <div className='flex-1  select-none text-center text-[13px] leading-none tracking-wide text-gray-500'>
          /index.ts
        </div>
        <div className='shrink-0 flex gap-2 items-center min-w-[60px] justify-end'>
          <button
            onClick={handleCopy}
            className='text-gray-500 hover:text-white h-5 w-5 transition-colors'
          >
            <span className='sr-only'>Copy</span>
            <FaCopy />
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        showLineNumbers={false}
        wrapLines
        language='typescript'
        style={vscDarkPlus}
        wrapLongLines
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
