import React from 'react';
import {
  NavWrapper,
  StyledTitleLink,
  LinkWrapper,
  StyledLink,
} from './Navigation.styles';

const Navigation = () => {
  return (
    <NavWrapper>
      <StyledTitleLink to="/">
        <h1>
          <span>florida</span> skateshop
        </h1>
      </StyledTitleLink>
      <LinkWrapper>
        <StyledLink to="/clothes">clothes</StyledLink>
        <StyledLink to="/skateboard">skateboard</StyledLink>
        <StyledLink to="/contact">contact</StyledLink>
        <StyledLink to="/auth">sign in</StyledLink>
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Navigation;
