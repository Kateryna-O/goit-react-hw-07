import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contact",
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = contactsSlice.reducer;
