import React from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/cart-icon.svg';
import { Wrapper } from './CartIcon.styles';

const CartIcon = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <ShoppingIcon />
      <span>0</span>
    </Wrapper>
  );
};

export default CartIcon;
