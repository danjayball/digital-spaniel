import React, { HTMLProps } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectGridItem from './ProjectGridItem';
import ArrowRight from '@/assets/svg/arrow-right.inline.svg';
import ArrowLeft from '@/assets/svg/arrow-left.inline.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import SectionLink from './SectionLink';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectGrid.css';

const projects = [
  {
    id: 0,
    image: <StaticImage src="../images/whellies01.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Branding', 'Web Design'],
    span: 1,
  },
  {
    id: 1,
    image: <StaticImage src="../images/newspaper02.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Digital Marketing'],
    span: 1,
  },
  {
    id: 2,
    image: <StaticImage src="../images/makerek.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Digital Marketing'],
    span: 1,
  },
  {
    id: 3,
    image: <StaticImage src="../images/newspaper.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Web Design'],
    span: 2,
  },
  {
    id: 4,
    image: <StaticImage src="../images/rider01.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Web Design'],
    span: 1,
  },
  {
    id: 5,
    image: <StaticImage src="../images/newspaper02.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Branding'],
    span: 1,
  },
  {
    id: 6,
    image: <StaticImage src="../images/makerek.png" alt="" />,
    title: 'Make ideas happen',
    description:
      'A local paper with big ideas needed. A sharp new brand to inspire readers.',
    categories: ['Web Design'],
    span: 1,
  },
];

interface ProjectGridProps extends HTMLProps<HTMLDivElement> {
  filter: string;
}

function ProjectGrid({ filter }: ProjectGridProps) {
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  const isMobile = useMediaQuery('(max-width: 640px)');

  const spansPerPage = isMobile ? 4 : 6;

  const sumSpans = (array: typeof projects) =>
    array.reduce((total, project) => total + project.span, 0);

  // The grid allows for 6 spans max, attempt to reduce to groups of that size
  // VERY naively picks a best fit
  const projectPages = filteredProjects.reduce(
    (pages: typeof projects[], project) => {
      let index = pages.findIndex((page) => sumSpans(page) < spansPerPage);
      if (index < 0) {
        index = pages.length - 1;
      }

      if (sumSpans(pages[index]) + project.span <= spansPerPage) {
        return pages.map((page, i) =>
          i === index ? [...page, project] : page
        );
      }

      return [...pages, [project]];
    },
    [[]]
  );

  return (
    <div>
      <div className="relative -mx-2">
        <Carousel
          autoPlay={false}
          axis="horizontal"
          centerMode={true}
          centerSlidePercentage={100}
          infiniteLoop={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={0}
          width="100%"
          className="project-slider"
        >
          {projectPages.map((page, i) => (
            <div
              key={i}
              className="grid grid-cols-2 grid-rows-2 gap-2 px-2 sm:grid-cols-3 sm:gap-8"
            >
              {page.map((project) => (
                <ProjectGridItem
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  span={project.span}
                />
              ))}
            </div>
          ))}
        </Carousel>

        <div className="px-2 absolute bottom-4">
          <SectionLink>See all work</SectionLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
