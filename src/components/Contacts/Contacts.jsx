import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContactById, getAllContacts } from 'services/ContactsAPI';
import { List, DelBtn, ContactList } from './Contacts.styled';

const ListOfContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const contactDeleter = id => {
    dispatch(deleteContactById(id));
  };

  const listToRender = useSelector(selectFilteredContacts);

  return (
    <ContactList>
      {listToRender.map(({ id, name, number }) => {
        return (
          <List key={id}>
            <span>
              {name}: {number}
            </span>
            <DelBtn type="button" onClick={() => contactDeleter(id)}>
              Delete
            </DelBtn>
          </List>
        );
      })}
    </ContactList>
  );
};

export default ListOfContacts;
