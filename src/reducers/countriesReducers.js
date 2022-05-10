import { ACTIONS_COUNTRIES } from '../types';

export default function countriesReducers(state = [], action) {
  switch (action.type) {
    case ACTIONS_COUNTRIES.GET_COUNTRIES:
      return action.payload;
    case ACTIONS_COUNTRIES.ADD_COUNTRY:
      return [...state, action.payload];
    case ACTIONS_COUNTRIES.DELETE_COUNTRY:
      return state.filter(country => country.id !== action.payload);
    default:
      return state;
  }
}
