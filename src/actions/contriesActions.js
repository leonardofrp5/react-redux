import { ACTIONS_COUNTRIES } from '../types';

export const getCountriesActions = countries => ({
  type: ACTIONS_COUNTRIES.GET_COUNTRIES,
  payload: countries
});

export const addCountryActions = country => ({
  type: ACTIONS_COUNTRIES.ADD_COUNTRY,
  payload: country
});

export const deleteCountryActions = id => ({
  type: ACTIONS_COUNTRIES.DELETE_COUNTRY,
  payload: id
});
