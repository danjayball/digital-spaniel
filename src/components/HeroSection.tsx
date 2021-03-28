import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import SectionLink from './SectionLink';

function HeroSection() {
  return (
    <header className="h-screen flex justify-center items-center relative">
      <div className="container z-10">
        <div className="w-full px-4 lg:w-1/2 lg:px-32">
          <p className="text-accent font-medium mb-14">
            BRAND, DEV, ECOM, MARKETING
          </p>

          <SectionTitle className="mb-14">
            <span className="text-primary text-5xl">We unleash</span>
            <br />
            <span className="text-secondary text-5xl">business potential</span>
          </SectionTitle>

          <SectionDescription>
            We create brand experiences which are memorable and distinct. Our
            experienced team create and develop brands with personality and
            resonance.
          </SectionDescription>

          <SectionLink href="#">Let's talk</SectionLink>
        </div>
      </div>

      <div className="absolute h-full w-full lg:w-1/2 right-0 top-0 opacity-20 lg:opacity-100">
        <StaticImage
          src="../images/hero-background.png"
          alt=""
          placeholder="none"
          backgroundColor="#253b6f"
          className="h-full"
        />
      </div>
    </header>
  );
}

export default HeroSection;
