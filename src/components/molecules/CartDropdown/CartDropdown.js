import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import CartItem from '../CartItem/CartItem';
import { CartContext } from 'providers/CartProvider';

const Wrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0 15px;
  border: 1px solid var(--color-lightGrey);
  background-color: white;
  box-shadow: 0 0.6rem 0.9rem rgba(0, 0, 0, 0.16),
    0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 0.7rem;
`;

const ItemsWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSize.m};
    color: var(--color-darkGrey);
  }
`;

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
        <Button onClick={goToCheckout}>Go to checkout</Button>
      ) : null}
    </Wrapper>
  );
};

export default CartDropdown;
