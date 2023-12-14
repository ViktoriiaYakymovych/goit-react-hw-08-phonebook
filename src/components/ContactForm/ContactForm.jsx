import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import {
  StyledForm,
  Label,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required field').trim(),
  number: Yup.number()
    .typeError('Must be a number')
    .required('Number is a required field'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return toast.error(
        `${newContact.name} or ${newContact.number} is already added to Your contact's list`
      );
    }
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addNewContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" type="text" placeholder="Name..." />
          <StyledError component="div" name="name" />
        </Label>
        <Label>
          Phone
          <StyledField name="number" type="tel" placeholder="Phone..." />
          <StyledError component="div" name="number" />
        </Label>
        <Button type="submit">Add new Contact</Button>
      </StyledForm>
    </Formik>
  );
};
