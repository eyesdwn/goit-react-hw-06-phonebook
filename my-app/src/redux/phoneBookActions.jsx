// import { Type } from './actionTypes.jsx';
import { createAction } from '@reduxjs/toolkit';

export const saveContact = createAction('SAVE_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const updateFilter = createAction('UPDATE_FILTER');

// without Redux Toolkit

// export const saveContact = contact => ({
//   type: Type.SAVE_CONTACT,
//   contact,
// });

// export const deleteContact = id => ({
//   type: Type.DELETE_CONTACT,
//   id,
// });

// export const updateFilter = filter => ({
//   type: Type.UPDATE_FILTER,
//   filter,
// });
