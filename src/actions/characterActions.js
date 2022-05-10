import { ACTIONS_CHARACTERS } from '../types';

export const getCharactersActions = characters => ({
  type: ACTIONS_CHARACTERS.GET_CHARACTERS,
  payload: characters
});

export const clearCharacterActions = () => ({
  type: ACTIONS_CHARACTERS.CLEAR_CHARACTERS,
  payload: []
});
