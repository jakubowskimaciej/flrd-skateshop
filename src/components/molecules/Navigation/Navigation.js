import React, { useContext } from 'react';
import {
  NavWrapper,
  StyledTitleLink,
  LinkWrapper,
  StyledLink,
} from './Navigation.styles';
import { signOutUser } from 'utils/firebase/firebase.utils';
import CartIcon from 'components/atoms/CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from 'providers/CartProvider';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/user/user.selector';

const Navigation = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <NavWrapper>
      <StyledTitleLink to="/">
        <h1>
          <span>florida</span> skateshop
        </h1>
      </StyledTitleLink>
      <LinkWrapper>
        <StyledLink to="/shop">shop</StyledLink>
        <StyledLink to="/skateboard">skateboard</StyledLink>
        <StyledLink to="/contact">contact</StyledLink>
        {!currentUser ? (
          <StyledLink to="/auth">sign in</StyledLink>
        ) : (
          <StyledLink as="span" onClick={signOutUser}>
            sign out
          </StyledLink>
        )}
        <CartIcon onClick={() => setIsCartOpen(!isCartOpen)} />
      </LinkWrapper>
      {isCartOpen ? <CartDropdown /> : null}
    </NavWrapper>
  );
};

export default Navigation;
