import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  &:hover, &:focus {
    color: orange;
  }
  &.active {
    color: red;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
