import ProjectCard from '@/components/projectCard/ProjectCard';
import SectionHeader from '@/components/sectionHeader/SectionHeader';
import { blogs } from '@/utils/blogs';
import { isValidUrl } from '@/utils/helpers';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog | Sandip Das',
};

const Blogs = () => {
  return (
    <main className='min-h-screen'>
      <section className='custom-container pt-[10rem] pb-10 hero-bg'>
        <SectionHeader
          subtitle='Blog'
          title='Checkout My Latest Articles.'
          className='mb-8'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10'>
          {blogs.map((blog) => (
            <ProjectCard
              key={blog.slug}
              title={blog.title}
              thumbnail={blog.thumbnail}
              slug={isValidUrl(blog.slug) ? blog.slug : `/blogs/${blog.slug}`}
              excerpt={blog.excerpt}
              tags={blog?.tags || []}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
