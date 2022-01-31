import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter, addContact, deleteContact } from "./phonebook-actions";
import toast from "react-hot-toast";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const { name, number } = payload;
    if (
      state.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`${name} is already in contacts.`);
    } else if (state.find((contact) => contact.number === number)) {
      toast.error(`${number} is already in contacts.`);
    } else {
      return [...state, payload];
    }
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
export default combineReducers({ items, filter });
