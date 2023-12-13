import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Section } from '../../components/Section/Section';

const Register = () => {
  return (
    <Section title="Sign up to create your phonebook">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Section>
  );
};

export default Register;
