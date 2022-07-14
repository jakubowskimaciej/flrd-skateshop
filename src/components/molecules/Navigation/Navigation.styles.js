import styled, { keyframes } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

export const borderAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
`;

export const LinkWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTitleLink = styled(Link)`
  text-decoration: none;

  h1 {
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-darkGrey);

    span {
      font-weight: 300;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: var(--color-darkGrey);
  text-decoration: none;
  text-transform: uppercase;
  transition: font-weight 200ms ease-in;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  &.active {
    font-weight: 900;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background-color: var(--color-darkGrey);
      animation: ${borderAnimation} 300ms ease-in;
    }
  }
`;
