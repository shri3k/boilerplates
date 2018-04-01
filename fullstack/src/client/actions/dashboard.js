import { ADD_TODO } from './';

// eslint-disable-next-line import/prefer-default-export
export function add(data) {
  return {
    type: ADD_TODO,
    data,
  };
}
