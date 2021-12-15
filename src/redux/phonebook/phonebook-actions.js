import shortid from "shortid";
import types from "./phonebook-types";
import { createAction } from "@reduxjs/toolkit";

const deleteContacts = createAction(types.DELETE);
const addContacts = createAction(types.ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const filterContacts = createAction(types.FILTER);

const actions = { deleteContacts, addContacts, filterContacts };

export default actions;
