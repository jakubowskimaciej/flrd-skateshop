import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
    object-fit: cover;
  }
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x $ {price}
        </span>
      </ItemDetails>
    </Wrapper>
  );
};

export default CartItem;
