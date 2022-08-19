import React from 'react';
import { ItemDetails, Wrapper } from './CartItem.styles';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
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
