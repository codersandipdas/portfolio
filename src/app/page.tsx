import { socials } from '../utils/socials';
import { CodeWindow } from '@/components/codeWindow/CodeWindow';
import ProjectCard from '@/components/projectCard/ProjectCard';
import SectionHeader from '@/components/sectionHeader/SectionHeader';
import SocialButton from '@/components/socialButton/SocialButton';
import { blogs } from '@/utils/blogs';
import { isValidUrl } from '@/utils/helpers';
import { projects } from '@/utils/projects';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section className='flex gap-10 flex-col md:flex-row md:items-center pt-[10rem] pb-20 hero-section hero-bg custom-container'>
        <div className='flex-[3] shrink-0 overflow-hidden'>
          <h1 className='text-[2.6rem] md:text-6xl leading-[1.3em] md:leading-[1.2em] text-white font-bold'>
            Hi, <br /> I&apos;m{' '}
            <strong className='text-primary'>Sandip Das</strong>, <br /> a
            Fullstack Dev.
          </h1>
          <p className='my-4 max-w-prose font-normal text-gray-400 d:text-gray-400 md:text-lg md:tracking-tight'>
            I&apos;m a Fullstack Developer with over a year of professional
            experience in MERN stack. I have hands-on experience with HTML, CSS,
            Javascript, React.js, Next.js, React Native, Svelte.js, Tailwind
            CSS, Node.js, Express.js, Nest.js, MongoDB, and Git, etc.
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
          ctaText='View All Portfolio'
          ctaLink='/portfolios'
          className='mb-8'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10'>
          {projects?.slice(0, 3)?.map((project) => (
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
              tags={project?.tags || []}
              githubLink={project?.githubLink || ''}
            />
          ))}
        </div>
      </section>

      <section className='custom-container py-10'>
        <SectionHeader
          subtitle='Blog'
          title='Checkout My Latest Articles.'
          className='mb-8'
          ctaText='View All Articles'
          ctaLink='/blogs'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10'>
          {blogs?.slice(0, 3)?.map((blog) => (
            <ProjectCard
              key={blog.slug}
              title={blog.title}
              thumbnail={blog.thumbnail}
              slug={
                isValidUrl(blog.slug) ? blog.slug : `/portfolios/${blog.slug}`
              }
              excerpt={blog.excerpt}
              tags={blog?.tags || []}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
