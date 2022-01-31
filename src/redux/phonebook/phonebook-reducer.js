import { combineReducers, createReducer } from "@reduxjs/toolkit";

import { changeFilter, addContacts, deleteContacts } from "./phonebook-actions";

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem("contacts")),
  {
    [addContacts]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) =>
      state.filter((contact) => {
        return contact.id !== payload;
      }),
  }
);

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
