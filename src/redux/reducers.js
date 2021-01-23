import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./actions";

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (!state.find((contact) => contact.name === payload.name)) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in the list`);
      return state;
    }
  },
  [deleteContact]: (state, { payload }) => {
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
