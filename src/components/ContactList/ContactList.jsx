import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

export default function ContactList({ data, onDelete }) {
  return (
    <ul className={s.list}>
      {data.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contactInfo={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
