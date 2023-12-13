import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Section } from '../../components/Section/Section';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebook">
      <Helmet title="Phonebook">
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <ContactList />
    </Section>
  );
};

export default Contacts;
