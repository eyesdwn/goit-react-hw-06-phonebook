// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { phoneBookReducer } from './phoneBookReducer';

const store = configureStore({
  reducer: phoneBookReducer,
});

// without Redux Toolkit
// const store = createStore(phoneBookReducer, devToolsEnhancer());

export default store;
