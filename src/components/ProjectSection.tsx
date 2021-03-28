import React, { lazy, Suspense, useState } from 'react';
import ClientOnly from './ClientOnly';
import ProjectTabs from './ProjectTabs';
import ProjectGrid from './ProjectGrid';
import SectionTitle from './SectionTitle';

function ProjectSection() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ['All', 'Branding', 'Web Design', 'Digital Marketing'];

  const onTabChange = (index: number) => {
    setCurrentTab(index);
  };

  // ClientOnly is being wrapped around ProjectGrid since pre-rendering
  // conflicts with the responsivity of it. This is due to the fact that
  // mobile displays 4 projects, and anything above displays 6 projects.
  return (
    <section className="bg-white py-12 lg:py-28">
      <div className="container flex mx-auto">
        <div className="w-full px-4 lg:px-32">
          <SectionTitle className="mb-12 lg:mb-14">
            <span className="text-primary">Some of our</span>
            <br />
            <span className="text-secondary">recent projects</span>
          </SectionTitle>

          <ProjectTabs tabs={tabs} onTabChange={onTabChange} />

          <div className="h-12 lg:h-16"></div>

          <ClientOnly
            fallback={<div className="w-full pt-[125%] sm:pt-[77%]"></div>}
          >
            <ProjectGrid filter={tabs[currentTab]} />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
