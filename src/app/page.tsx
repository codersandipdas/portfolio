import Link from 'next/link';
import { socials } from '../utils/socials';
import { CodeWindow } from '@/components/codeWindow/CodeWindow';

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
      <section
        className='flex gap-10 flex-col md:flex-row md:items-center pt-[10rem] pb-20 hero-section custom-container'
        style={{
          backgroundImage: 'url(/assets/backgrounds/hero.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
      >
        <div className='flex-[3] shrink-0'>
          <h1 className='heading-hero text-white text-[2.4rem] md:text-[3.6rem] leading-[1.3em] md:leading-[1.2em] font-bold'>
            Hi, <br /> I&apos;m{' '}
            <strong className='text-primary'>Sandip Das</strong>, <br /> a
            Fullstack Dev.
          </h1>
          <p className='my-4 max-w-prose font-normal text-gray-400 d:text-gray-400 md:text-lg md:tracking-tight'>
            I love writing code that takes things next level creating highly
            performant websites, automated API integrations, building my own
            dev-tools, and creating stunning user-experiences that makes you
            feel{' '}
            <em className='relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600'>
              WOW!
            </em>
          </p>
          <div className='flex gap-5 flex-wrap items-center mt-8 text-base'>
            {socials.map((social) => (
              <Link
                title={social.title}
                key={social.id}
                href={social.link}
                target='_blank'
                className='flex gap-2 items-center bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-md transition-all'
              >
                <span className='text-primary'>{social.icon}</span>
                <span className='font-semibold text-white'>{social.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='flex-[2] grow-0'>
          <CodeWindow />
        </div>
      </section>
    </main>
  );
}
