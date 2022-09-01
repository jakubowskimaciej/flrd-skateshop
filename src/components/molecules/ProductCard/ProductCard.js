import React, { useContext } from 'react';
import { CartContext } from 'providers/CartProvider';
import { StyledButton, StyledInfo, Wrapper } from './ProductCard.styles';

const ProductCard = ({ product }, category) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <StyledInfo>
        <span>{name}</span>
        <span>{price} $</span>
      </StyledInfo>
      <StyledButton onClick={() => addItemToCart(product)}>
        Add to cart
      </StyledButton>
    </Wrapper>
  );
};

export default ProductCard;
