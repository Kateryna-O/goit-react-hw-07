import { createSlice } from "@reduxjs/toolkit";

const loadContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
};

const initialState = {
  items: loadContactsFromLocalStorage(),
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.items));
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(state.items));
    },
    setContacts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = contactsSlice.reducer;
