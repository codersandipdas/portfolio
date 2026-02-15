import { Experience as ExperienceType } from '@/utils/types';
import React from 'react';

interface Props {
  experience: ExperienceType;
  right?: boolean;
}

const Experience: React.FC<Props> = ({ experience, right = false }) => {
  return (
    <div className='relative pl-8 md:pl-0'>
      {/* Timeline line */}
      <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-emerald-500/20 -translate-x-1/2 block'></div>

      <div
        className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${right ? 'md:flex-row-reverse' : ''}`}
      >
        <div className='flex-1 w-full'>
          <div className='bg-gray-900 p-4 md:p-8 rounded-xl hover:border-primary/30 border border-gray-600/40 transition-all group'>
            <div className='flex flex-wrap items-center justify-between mb-4 gap-2'>
              <h3 className='text-xl font-bold transition-colors'>
                {experience.role}
              </h3>
              <span className='text-sm font-medium bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full'>
                {experience.period}
              </span>
            </div>
            <div className='mb-6'>
              <p className='text-emerald-500 font-semibold'>
                {experience.company}
              </p>
              <p className='text-sm text-gray-500'>{experience.location}</p>
            </div>
            <ul className='space-y-3'>
              {experience.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className='flex gap-3 text-gray-400 text-sm leading-relaxed'
                >
                  <span className='text-emerald-500 mt-1'>•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline dot */}
        <div className='absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0a0a0a] -translate-x-1/2 z-10 block'></div>

        <div className='flex-1 block'></div>
      </div>
    </div>
  );
};

export default Experience;
