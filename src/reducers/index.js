import { combineReducers } from 'redux';
import charactersReducer from './charactersReducers';
import counterReducer from './counterReducer';
import countriesReducers from './countriesReducers';

const reducer = combineReducers({
  counter: counterReducer,
  characters: charactersReducer,
  countries: countriesReducers
});

export default reducer;
