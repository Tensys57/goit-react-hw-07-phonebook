import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  // const handleFormSubmit = contact => {
  //   if (contacts.find(item => item.name === contact.name)) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   setContacts(prevState => [...prevState, contact]);
  // };

  // const changeFilter = ev => {
  //   setFilter(ev.currentTarget.value);
  // };

  return (
    <div className={css.container}>
      <p className={css.main}>Phonebook</p>
      <ContactForm />
      <p className={css.title}>Contacts</p>
      <Filter />
      <Contacts />
    </div>
  );
};
