import { useAuth } from 'hooks';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import AuthNav from '../../components/AuthNav/AuthNav';
import { StyledHeader, StyledNav } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <StyledNav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledNav>
    </StyledHeader>
  );
};

export default AppBar;
