import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required field').trim(),
  email: Yup.string().required('Email is required field').trim(),
  password: Yup.string().required('Password is a required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" placeholder="Name..." />
          <ErrorMessage component="div" name="name" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
