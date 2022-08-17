import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/cart-icon.svg';
import { Wrapper } from './CartIcon.styles';
import { CartContext } from 'providers/CartProvider';

const CartIcon = ({ ...props }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <Wrapper {...props}>
      <ShoppingIcon />
      <span>{cartItemCount}</span>
    </Wrapper>
  );
};

export default CartIcon;
