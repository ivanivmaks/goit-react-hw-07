import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <>
      <div>
        <p className={css.item}>
          <GoPersonFill />
          {name}
        </p>
        <p className={css.item}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={(handleDelete)}
      >
        Delete
      </button>
    </>
  );
}
