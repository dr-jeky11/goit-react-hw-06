import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";

import s from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
