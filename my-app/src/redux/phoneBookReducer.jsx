// import { combineReducers } from "redux";
import { Type } from './actionTypes';

const initialStore = {
  contacts: [],
  filter: '',
};

export const phoneBookReducer = (store = initialStore, action) => {
  if (action.type === Type.UPDATE_FILTER) {
    return {
      ...store,
      filter: action.filter,
    };
  } else if (action.type === Type.SAVE_CONTACT) {
    return {
      ...store,
      contacts: store.contacts.concat(action.contact),
    };
  } else if (action.type === Type.DELETE_CONTACT) {
    return {
      ...store,
      contacts: store.contacts.filter(contact => contact.id !== action.id),
    };
  }

  return store;
};
