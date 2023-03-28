import AddContactForm from './ContactForm';
import ListOfContacts from './Contacts';
import Filter from './Filter';
import { AppTitle, Wrapper, Header, Loader } from './App.styled';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/selectors';

const App = () => {
  const loadingMarker = useSelector(isLoading);
  return (
    <Wrapper>
      <>
        <Header>Phonebook</Header>
        <AddContactForm />
        <Filter />
        <AppTitle>Contacts</AppTitle>
        {loadingMarker && <Loader> is updating...</Loader>}
        <ListOfContacts />
      </>
    </Wrapper>
  );
};

export { App };
