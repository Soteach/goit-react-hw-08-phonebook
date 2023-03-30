import { AddContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ListOfContacts } from 'components/Contacts/Contacts';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/contacts/contactsSelectors';
import { Loader, Title, Header } from './Contact.styled';

const Contacts = () => {
  const loadingMarker = useSelector(isLoading);

  return (
    <>
      <Header>Phonebook</Header>
      <AddContactForm />
      <Filter />
      <Title>Contacts</Title>
      {loadingMarker && <Loader> is updating...</Loader>}
      <ListOfContacts />
    </>
  );
};

export default Contacts;
