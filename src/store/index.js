import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers/index';

const store = configureStore({
  reducer: {
    reducers
  }
});

store.subscribe(() => console.log(store));

export default store;
