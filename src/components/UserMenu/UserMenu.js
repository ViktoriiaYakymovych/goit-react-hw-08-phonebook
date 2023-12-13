import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
