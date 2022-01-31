import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter, addContact, deleteContact } from "./phonebook-actions";

import toast from "react-hot-toast";
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const { name } = payload;
    const idx = state.findIndex(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (idx !== -1) {
      toast(`${name} is already in contacts`);
      return state;
    }
    const newState = [...state, payload];
    return newState;
  },
  [deleteContact]: (state, { payload }) => {
    const newState = state.filter(({ id }) => id !== payload);
    return newState;
  },
});
export default combineReducers({ items, filter });
