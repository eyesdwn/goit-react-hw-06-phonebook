// import { Type } from './actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import { updateFilter, saveContact, deleteContact } from './phoneBookActions';

const initialStore = {
  contacts: [],
  filter: '',
};

export const phoneBookReducer = createReducer(initialStore, {
  [updateFilter]: (state, action) => {
    const { payload } = action;
    state.filter = payload;
  },
  [saveContact]: (state, action) => {
    const { payload } = action;
    state.contacts.push(payload);
  },
  [deleteContact]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== payload),
    };
  },
});

// export const phoneBookReducer = (store = initialStore, action) => {
//   if (action.type === Type.UPDATE_FILTER) {
//     return {
//       ...store,
//       filter: action.filter,
//     };
//   } else if (action.type === Type.SAVE_CONTACT) {
//     return {
//       ...store,
//       contacts: store.contacts.concat(action.contact),
//     };
//   } else if (action.type === Type.DELETE_CONTACT) {
//     return {
//       ...store,
//       contacts: store.contacts.filter(contact => contact.id !== action.id),
//     };
//   }

//   return store;
// };
