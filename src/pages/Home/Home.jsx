import { Link } from '../../components/AuthNav/AuthNav.styled';
import {
  StyledMain,
  StyledSection,
} from '../../components/Section/Section.styled';

const Home = () => {

  return (
    <StyledMain>
      <StyledSection>
        <h1>Your phonebook will apeare here</h1>
        <ul>
          <li>
            <span style={{ color: '#33b1eb' }}>
              <Link to="/login">Press here </Link>
            </span>
            to log in.
          </li>
          <li>
            Don't have account yet?{' '}
            <span style={{ color: '#33b1eb' }}>
              <Link to="/register">Click here</Link>
            </span>{' '}
            to create it.
          </li>
        </ul>
      </StyledSection>
    </StyledMain>
  );
};

export default Home;
