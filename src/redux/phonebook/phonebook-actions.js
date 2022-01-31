import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add", (contact) => ({
  payload: {
    id: nanoid(),
    ...contact,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");
