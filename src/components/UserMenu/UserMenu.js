import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from '../../redux/auth/operations';
import { UserMenuDiv } from './UserMenu.styled';
import { Button } from '../ContactCard/ContactCard.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuDiv>
      <p>{user.email}</p>
      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </UserMenuDiv>
  );
};

export default UserMenu;
