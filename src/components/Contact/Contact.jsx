import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
