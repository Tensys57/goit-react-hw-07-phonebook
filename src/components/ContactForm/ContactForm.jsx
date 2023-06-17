import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = ev => {
    const { name, value } = ev.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Failed value...');
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (contacts.find(item => item.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.inputForm} onSubmit={handleSubmit}>
        <label className={css.inputLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label className={css.inputLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.inputBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
