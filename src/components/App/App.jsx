import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

import Loader from 'components/Loader/Loader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Layout } from 'components/Layout';
// import { LoginForm } from '../LoginForm/LoginForm';
// import { RegisterForm } from '../RegisterForm/RegisterForm';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {/* <RegisterForm/>
      <LoginForm/> */}
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <b>Contacts list will be here</b>
      )}
      <Toaster />
    </Layout>
  );
};
