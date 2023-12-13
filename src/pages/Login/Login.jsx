import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Section } from '../../components/Section/Section';

const Login = () => {
  return (
    <Section title="Log in to overview your phonebook">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Section>
  );
};

export default Login;
