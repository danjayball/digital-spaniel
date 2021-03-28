import { ThunkDispatch } from 'redux-thunk';
import { Testimonial, LoadingStatus } from '@/types';

export type TestimonialState = {
  testimonials: Testimonial[];
  status: LoadingStatus;
};

export type TestimonialAction =
  | {
      type: 'SET_TESTIMONIALS';
      payload: Testimonial[];
    }
  | {
      type: 'SET_STATUS';
      payload: LoadingStatus;
    };

export type TestimonialDispatch = ThunkDispatch<
  TestimonialState,
  any,
  TestimonialAction
>;
