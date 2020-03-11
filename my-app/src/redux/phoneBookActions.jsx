import { Type } from './actionTypes.jsx';

export const saveContact = contact => ({
  type: Type.SAVE_CONTACT,
  contact,
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  id,
});

export const updateFilter = filter => ({
  type: Type.UPDATE_FILTER,
  filter,
});
