import { useAuth } from 'hooks';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import AuthNav from '../../components/AuthNav/AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
