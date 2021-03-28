import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CapabilitySection from '@/components/CapabilitySection';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import Helmet from 'react-helmet';

const IndexPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Digital Spaniel</title>
        <meta
          name="description"
          content="Digital Spaniel - We unleash business potential"
        />
      </Helmet>
      <NavBar />
      <HeroSection />
      <main>
        <CapabilitySection />
        <ProjectSection />
        <TestimonialSection />
      </main>
    </>
  );
};

export default IndexPage;
