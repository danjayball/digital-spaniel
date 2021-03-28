import React, { HTMLProps } from 'react';
import { Testimonial } from '@/types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TestimonialSlider.css';
import useMediaQuery from '@/hooks/useMediaQuery';

interface TestimonialSliderProps extends HTMLProps<HTMLDivElement> {
  testimonials: Testimonial[];
}

function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="overflow-hidden mx-0 sm:-mx-4 lg:overflow-visible">
      <div className="overflow-hidden sm:py-8 xl:px-8 lg:-mx-28 2xl:-mx-40">
        <Carousel
          autoPlay={false}
          axis="horizontal"
          centerMode={true}
          centerSlidePercentage={isMobile ? 100 : isTablet ? 50 : 33.333333}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={Math.floor(testimonials.length / 2)}
          width="100%"
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.name}
                className="testimonial-slide cursor-default w-full p-5 2xl:py-5 2xl:px-0"
              >
                <div className="testimonial-slide-wrapper relative">
                  <div className="absolute flex flex-col justify-center items-center w-full h-full p-6 top-0 left-0 rounded-lg text-center lg:p-[50px]">
                    <p className="text-lg leading-normal italic font-semibold mb-8 lg:mb-12 lg:text-xl 2xl:mb-16 2xl:text-[30px] 2xl:leading-normal">
                      {testimonial.comment}
                    </p>

                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="testimonial-slide-image"
                    />

                    <p className="text-lg font-bold lg:text-xl 2xl:text-[21px]">
                      {testimonial.name}
                    </p>

                    <p className="text-lg lg:text-xl 2xl:text-[21px]">
                      {testimonial.occupation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialSlider;
