import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const deleteContacts = createAction("contacts/delete");
export const changeFilter = createAction("contacts/changeFilter");
export const addContacts = createAction("contacts/add", (name, phone) => ({
  payload: {
    id: nanoid(),
    name,
    phone,
  },
}));
