import { Link, NavDiv } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavDiv>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </NavDiv>
  );
};

export default AuthNav;
