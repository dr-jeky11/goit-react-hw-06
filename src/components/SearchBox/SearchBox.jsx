import { useId } from "react";

import s from "./SearchBox.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchBox({ value, onSearch }) {
  const id = useId();

  const handleClearInput = () => {
    onSearch("");
  };

  return (
    <div className={s.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <div className={s.inputWrapper}>
        <input
          className={s.search}
          id={id}
          type="text"
          value={value}
          onChange={(evt) => {
            onSearch(evt.target.value);
          }}
        />
        <button className={s.closeBtn} type="button" onClick={handleClearInput}>
          <AiOutlineCloseCircle size={16} />
        </button>
      </div>
    </div>
  );
}
