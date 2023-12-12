import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';

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
      <Form>
        <label>
          Email
          <Field name="email" type="email" placeholder="Email..." />
          <ErrorMessage component="div" name="email" />
        </label>
        <label>
          Password
          <Field name="password" type="password" placeholder="Password..." />
          <ErrorMessage component="div" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
