import { useAuth } from 'hooks';
import { Link, NavDiv } from '../../components/AuthNav/AuthNav.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavDiv>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="contacts">Contacts</Link>}
    </NavDiv>
  );
};

export default Navigation;
