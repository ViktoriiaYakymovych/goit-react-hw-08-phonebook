import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import RestrictedRoute from '../../components/RestrictedRoute';
import Layout from '../Layout';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Refreshing</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <RestrictedRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';

// import { fetchContacts } from '../../redux/contacts/operations';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from '../../redux/contacts/selectors';

// import Loader from 'components/Loader/Loader';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Section } from 'components/Section/Section';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { Layout } from 'components/Layout';
// // import { LoginForm } from '../LoginForm/LoginForm';
// // import { RegisterForm } from '../RegisterForm/RegisterForm';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const contacts = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Layout>
//       {/* <RegisterForm/>
//       <LoginForm/> */}
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>
//       {isLoading && !error && <Loader />}
//       {contacts.length > 0 ? (
//         <Section title="Contacts">
//           <Filter />
//           <ContactList />
//         </Section>
//       ) : (
//         <b>Contacts list will be here</b>
//       )}
//       <Toaster />
//     </Layout>
//   );
// };
