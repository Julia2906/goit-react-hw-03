import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const newContact = { id: nanoid(), name, number };
  setContacts(prevContacts => [...prevContacts, newContact]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
export default App;
