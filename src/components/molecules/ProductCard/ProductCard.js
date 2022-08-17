import React from 'react';
import { StyledButton, StyledInfo, Wrapper } from './ProductCard.styles';

const ProductCard = ({ itemData: { id, imageUrl, name, price } }) => {
  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <StyledInfo>
        <span>{name}</span>
        <span>{price} $</span>
      </StyledInfo>
      <StyledButton>Add to cart</StyledButton>
    </Wrapper>
  );
};

export default ProductCard;
