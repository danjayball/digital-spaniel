import React, { HTMLProps } from 'react';
import cx from 'clsx';
import './ProjectGridItem.css';

interface ProjectGridItemProps extends HTMLProps<HTMLDivElement> {
  image: JSX.Element;
  title: string;
  description: string;
  href?: string;
  span?: number;
}

function ProjectGridItem({
  image,
  title,
  description,
  href = '#',
  span = 1,
}: ProjectGridItemProps) {
  return (
    <div
      className={cx('flex relative cursor-default rounded-lg overflow-hidden', {
        'col-span-1': span !== 2,
        'col-span-1 sm:col-span-2': span === 2,
      })}
    >
      {image}

      <div className="project-grid-item absolute flex flex-col items-start justify-end w-full h-full px-4 py-6 bg-gradient-to-b from-transparent to-primary text-white transition-opacity duration-200 opacity-100 hover:opacity-100 lg:opacity-0 sm:px-8 sm:py-8">
        <h2 className="font-title text-xl mb-2 text-left sm:text-2xl sm:mb-4">
          {title}
        </h2>

        <p className="hidden text-lg mb-8 text-left lg:inline">{description}</p>

        <a
          href={href}
          className="text-base block relative text-left sm:text-xl sm:font-semibold"
        >
          Full project
        </a>
      </div>
    </div>
  );
}

export default ProjectGridItem;
