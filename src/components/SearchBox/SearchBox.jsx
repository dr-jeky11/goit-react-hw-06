import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import { useId } from "react";

import s from "./SearchBox.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchBox() {
  const dispatch = useDispatch();

  const id = useId();

  const handleClearInput = () => {
    dispatch(changeFilter(""));
  };

  const value = useSelector(selectNameFilter);

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
            dispatch(changeFilter(evt.target.value));
          }}
        />
        <button className={s.closeBtn} type="button" onClick={handleClearInput}>
          <AiOutlineCloseCircle size={16} />
        </button>
      </div>
    </div>
  );
}
