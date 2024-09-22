import { socials } from '../utils/socials';
import { CodeWindow } from '@/components/codeWindow/CodeWindow';
import ProjectCard from '@/components/projectCard/ProjectCard';
import SectionHeader from '@/components/sectionHeader/SectionHeader';
import SocialButton from '@/components/socialButton/SocialButton';
import { isValidUrl } from '@/utils/helpers';
import { projects } from '@/utils/projects';

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
      <section className='flex gap-10 flex-col md:flex-row md:items-center pt-[10rem] pb-20 hero-section hero-bg custom-container'>
        <div className='flex-[3] shrink-0 overflow-hidden'>
          <h1 className='text-[2.6rem] md:text-6xl leading-[1.3em] md:leading-[1.2em] text-white font-bold'>
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
          <div className='flex gap-4 flex-wrap items-center mt-8'>
            {socials.map((social) => (
              <SocialButton
                key={social.id}
                title={social.title}
                href={social.link}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
        <div className='flex-[2] shrink-0 overflow-hidden'>
          <CodeWindow />
        </div>
      </section>

      <section className='custom-container py-10'>
        <SectionHeader
          subtitle='Portfolio'
          title='Checkout my work.'
          ctaText='View More'
          ctaLink='/portfolios'
          className='mb-8'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10'>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              thumbnail={project.thumbnail}
              slug={
                isValidUrl(project.slug)
                  ? project.slug
                  : `/portfolios/${project.slug}`
              }
              excerpt={project.excerpt}
              tags={project?.tags || ['Javascript', 'HTML', 'CSS']}
              githubLink={project?.githubLink || ''}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
