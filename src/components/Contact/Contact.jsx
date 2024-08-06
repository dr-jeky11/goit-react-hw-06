import { FaUserLarge, FaPhone } from "react-icons/fa6";

import s from "./Contact.module.css";

export default function Contact({
  contactInfo: { name, number, id },
  onDelete,
}) {
  return (
    <div className={s.container}>
      <div>
        <div className={s.contactsInfo}>
          <FaUserLarge size={24} />
          <p className={s.name}>{name}</p>
        </div>

        <div className={s.contactsInfo}>
          <FaPhone size={24} />
          <p className={s.number}>{number}</p>
        </div>
      </div>

      <button
        type="button"
        className={s.button}
        onClick={() => {
          onDelete(id);
        }}>
        Delete
      </button>
    </div>
  );
}
