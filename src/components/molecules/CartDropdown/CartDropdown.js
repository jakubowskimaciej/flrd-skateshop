import React, { useContext } from 'react';
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
  padding: 20px;
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
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Wrapper>
      <ItemsWrapper>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ItemsWrapper>
      <Button>go to checkout</Button>
    </Wrapper>
  );
};

export default CartDropdown;
