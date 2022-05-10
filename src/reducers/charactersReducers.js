import { ACTIONS_CHARACTERS } from '../types';

export default function charactersReducer(state = [], action) {
  switch (action.type) {
    case ACTIONS_CHARACTERS.GET_CHARACTERS:
      return action.payload;
    case ACTIONS_CHARACTERS.CLEAR_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}
