import { useSelector } from "react-redux";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import "./App.css";

const Phonebook = () => {
  const filter = useSelector((state) => state.counter.filter);
  const contacts = useSelector((state) => state.counter.items);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="phonebook-warper">
      <div className="phonebook-form">
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div className="phonebook-contacts">
        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={filteredContacts} />
      </div>
    </div>
  );
};

export default Phonebook;
