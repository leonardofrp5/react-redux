import { ACTION_TYPES } from '../types';

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + 1;
    case ACTION_TYPES.DECREMENT:
      return state - 1;
    case ACTION_TYPES.RESET:
      return action.payload;
    default:
      return state;
  }
}
