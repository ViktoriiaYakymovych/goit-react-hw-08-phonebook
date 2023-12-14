import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
  Label,
} from '../ContactForm/ContactForm.styled';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required field').trim(),
  password: Yup.string().required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
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
          />
          <StyledError component="div" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
  );
};
