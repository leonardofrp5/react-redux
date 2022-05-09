import { ACTION_TYPES } from '../types';

export const increment = () => ({
  type: ACTION_TYPES.INCREMENT
});

export const decrement = () => ({
  type: ACTION_TYPES.DECREMENT
});

export const reset = reset => ({
  type: ACTION_TYPES.RESET,
  payload: reset
});
