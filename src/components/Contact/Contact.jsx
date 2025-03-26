import css from './Contact.module.css';
import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

const Contact = ({ name, number }) => {
  return (
    <div>
      <p>
        <HiUser /> {name}
      </p>
      <p>
        <HiPhone /> {number}
      </p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
