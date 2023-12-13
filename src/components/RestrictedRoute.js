import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

//If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
//Otherwise render the component

const RestrictedRoute = ({component, redirectTo = "/"}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
