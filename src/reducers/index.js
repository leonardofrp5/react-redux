import { combineReducers } from 'redux';
import charactersReducer from './charactersReducers';
import counterReducer from './counterReducer';

const reducer = combineReducers({
  counter: counterReducer,
  characters: charactersReducer
});

export default reducer;
