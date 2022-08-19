import React, { useContext } from 'react';
import { CartContext } from 'providers/CartProvider';
import {
  ButtonWrapper,
  CheckoutHeader,
  CheckoutItem,
  ImageWrapper,
  StyledTotal,
  Wrapper,
} from './Checkout.styles';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <Wrapper>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem>
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
        </CheckoutItem>
      ))}
      <StyledTotal>
        <div>
          <p>TOTAL PRICE: ${cartTotal}</p>
          <Button isSecondary>Stripe</Button>
        </div>
      </StyledTotal>
    </Wrapper>
  );
};

export default Checkout;
