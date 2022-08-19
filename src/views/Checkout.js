import React, { useContext } from 'react';
import { CartContext } from 'providers/CartProvider';
import { CheckoutHeader, StyledTotal, Wrapper } from './Checkout.styles';
import { Button } from 'components/atoms/Button/Button';
import CheckoutItem from 'components/molecules/CheckoutItem/CheckoutItem';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
        <CheckoutItem key={item.id} item={item} />
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
