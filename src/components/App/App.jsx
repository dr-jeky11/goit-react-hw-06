import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import s from "./App.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((previousContacts) => {
      return previousContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList data={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
