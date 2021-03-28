import { applyMiddleware, createStore } from 'redux';
import { TestimonialAction, TestimonialState } from './types';
import thunk from 'redux-thunk';

const initialState: TestimonialState = {
  testimonials: [],
  status: 'idle',
};

const reducer = (
  state = initialState,
  action: TestimonialAction
): TestimonialState => {
  switch (action.type) {
    case 'SET_TESTIMONIALS':
      return { ...state, testimonials: action.payload };
    case 'SET_STATUS':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const initialiseStore = () =>
  createStore(reducer, applyMiddleware(thunk));
