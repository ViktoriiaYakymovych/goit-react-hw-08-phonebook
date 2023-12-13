import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </>
  );
};

export default Navigation;
