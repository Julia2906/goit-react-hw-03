import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
