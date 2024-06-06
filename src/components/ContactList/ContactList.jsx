import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/contactsSlice";
import { getFilters } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(getItems);
  const filters = useSelector(getFilters);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
