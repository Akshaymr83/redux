// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducer/counterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
