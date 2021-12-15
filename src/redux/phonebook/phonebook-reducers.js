import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const itemsState = [
  {
    id: "id-1",
    name: "Rosie Simpson",
    number: "459-12-56",
  },
  {
    id: "id-2",
    name: "Hermione Kline",
    number: "443-89-12",
  },
  {
    id: "id-3",
    name: "Eden Clements",
    number: "645-17-79",
  },
  {
    id: "id-4",
    name: "Annie Copeland",
    number: "227-91-26",
  },
];

const itemsReducer = createReducer(itemsState, (builder) => {
  builder
    .addCase(actions.deleteContacts, (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    })
    .addCase(actions.addContacts, (state, { payload }) => {
      const dublicateContact = state.find((item) => item.name === payload.name);
      if (dublicateContact) {
        alert(`Контакт ${dublicateContact.name} уже существует`);
        return state;
      } else {
        return [payload, ...state];
      }
    });
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(actions.filterContacts, (_, { payload }) => {
    return payload;
  });
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
