import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Contact from "../Contact/Contact.jsx";
import { getFilteredContacts } from "redux/selectors";
import { fetchContacts, deleteContact } from "redux/operations";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <Contact
            name={name}
            number={number}
            onDelete={() => {
              dispatch(deleteContact(id));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
