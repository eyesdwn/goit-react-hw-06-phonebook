import { Type } from "./actionTypes.jsx";

export const saveContact = contact => ({
    type: Type.SAVE_CONTACT,
    contact,
});

export const deleteContact = contact => ({
    type: Type.DELETE_CONTACT,
    contact,
});

export const updateFilter = filter => ({
    type: Type.UPDATE_FILTER,
    filter,
});