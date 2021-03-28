import { Testimonial } from '@/types';
import { TestimonialDispatch } from './types';

export function getTestimonials() {
  return async (dispatch: TestimonialDispatch) => {
    try {
      dispatch({ type: 'SET_STATUS', payload: 'loading' });

      const response = await fetch('/api/testimonials.json');
      const testimonials = (await response.json()) as Testimonial[];

      dispatch({ type: 'SET_TESTIMONIALS', payload: testimonials });
      dispatch({ type: 'SET_STATUS', payload: 'idle' });
    } catch (error) {
      dispatch({ type: 'SET_STATUS', payload: 'error' });
    }
  };
}
