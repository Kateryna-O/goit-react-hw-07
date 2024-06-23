import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
  setContacts,
} from "../src/redux/contactsSlice";
import { selectFilter, changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectFilter);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    dispatch(setContacts(savedContacts));
  }, [dispatch]);

  const handleSearchChange = (searchQuery) => {
    dispatch(changeFilter(searchQuery));
  };

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={(contact) => dispatch(addContact(contact))} />
      <SearchBox searchQuery={nameFilter} setSearchQuery={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDelete={(id) => dispatch(deleteContact({ id }))}
      />
    </div>
  );
}

export default App;
