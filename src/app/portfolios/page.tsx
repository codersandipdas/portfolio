import ProjectCard from '@/components/projectCard/ProjectCard';
import SectionHeader from '@/components/sectionHeader/SectionHeader';
import { isValidUrl } from '@/utils/helpers';
import { projects } from '@/utils/projects';
import React from 'react';

const Portfolios = () => {
  return (
    <main className='min-h-screen'>
      <section className='custom-container pt-[10rem] pb-10 hero-bg'>
        <SectionHeader
          subtitle='Portfolio'
          title='Checkout my work.'
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
};

export default Portfolios;
