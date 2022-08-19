import React, { useContext } from 'react';
import { CartContext } from 'providers/CartProvider';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/atoms/Button/Button';
import CartItem from '../CartItem/CartItem';
import { ItemsWrapper, Wrapper } from './CartDropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => navigate('/checkout');

  return (
    <Wrapper>
      <ItemsWrapper>
        {!cartItems.length ? (
          <p>There's nothing yet.</p>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        )}
      </ItemsWrapper>
      {cartItems.length ? (
        <Button isSmall onClick={goToCheckout}>
          Go to checkout
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default CartDropdown;
