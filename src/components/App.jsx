import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { selectError, selectIsLoading } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <p className={css.main}>Phonebook</p>
      <ContactForm />
      <p className={css.title}>Contacts</p>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <Contacts />
    </div>
  );
};
