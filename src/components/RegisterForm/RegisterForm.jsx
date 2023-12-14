import { useDispatch } from 'react-redux';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import {
  StyledForm,
  StyledField,
  StyledError,
  Label,
  Button,
} from '../ContactForm/ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required field').trim(),
  email: Yup.string().required('Email is required field').trim(),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password has to contain at least 8 symbols')
    .max(16, 'Password has to contain at most 16 symbols'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
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
          Email
          <StyledField name="email" type="email" placeholder="Email..." />
          <StyledError component="div" name="email" />
        </Label>
        <Label>
          Password
          <StyledField
            name="password"
            type="password"
            placeholder="Password..."
            autoComplete="false"
          />
          <StyledError component="div" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
