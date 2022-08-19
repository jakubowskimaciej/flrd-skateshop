import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ButtonWrapper, ImageWrapper, Wrapper } from './CheckoutItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from 'providers/CartProvider';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={item.imageUrl} alt={item.name} />
      </ImageWrapper>
      <p>{item.name}</p>
      <span>
        <div onClick={() => removeItemFromCart(item)}>&#10094;</div>
        <p>{item.quantity}</p>
        <div onClick={() => addItemToCart(item)}>&#10095;</div>
      </span>
      <p>$ {item.price}</p>
      <ButtonWrapper>
        <Button isSmall onClick={() => clearItemFromCart(item)}>
          <FontAwesomeIcon icon={['fas', 'trash-alt']} />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CheckoutItem;
