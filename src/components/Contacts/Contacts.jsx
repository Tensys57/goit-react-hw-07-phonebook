import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className={css.deleteBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
