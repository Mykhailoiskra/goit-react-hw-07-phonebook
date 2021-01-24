import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

import { fetchContacts, deleteContact, addContact } from "./operations";

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload);
  },
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
