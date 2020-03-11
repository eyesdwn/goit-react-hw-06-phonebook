import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { phoneBookReducer } from './phoneBookReducer';

const store = createStore(phoneBookReducer, devToolsEnhancer());

export default store;
