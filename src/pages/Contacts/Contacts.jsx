import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Section } from '../../components/Section/Section';
import { selectContacts} from '../../redux/contacts/selectors';
import { Filter } from '../../components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contasts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebook">
      <Helmet title="Phonebook">
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {contasts.length >= 2 && <Filter />}
      <ContactList />
    </Section>
  );
};

export default Contacts;
