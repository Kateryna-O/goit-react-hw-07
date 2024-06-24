import React from "react";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact({ id: contact.id }));
  };

  return (
    <div className={styles.contact}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
