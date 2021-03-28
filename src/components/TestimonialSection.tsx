import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '@/state/actions';
import { TestimonialDispatch, TestimonialState } from '@/state/types';
import SectionTitle from './SectionTitle';
import TestimonialSlider from './TestimonialSlider';

function TestimonialSection() {
  const testimonials = useSelector(
    (state: TestimonialState) => state.testimonials
  );
  const status = useSelector((state: TestimonialState) => state.status);
  const dispatch = useDispatch<TestimonialDispatch>();

  useEffect(() => {
    dispatch(getTestimonials());
  }, []);

  return (
    <section className="bg-white py-12 lg:py-28">
      <div className="container flex mx-auto">
        <div className="w-full px-4 lg:px-32">
          <SectionTitle>
            <span className="text-primary">Kind words</span>
            <br />
            <span className="text-secondary">from our clients</span>
          </SectionTitle>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
