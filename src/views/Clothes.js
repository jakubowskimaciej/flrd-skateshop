import React, { useContext } from 'react';
import { ProductsContext } from 'providers/ProductsProvider';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { Wrapper } from './Clothes.styles';

const Clothes = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Wrapper>
      {products.map((productData) => (
        <ProductCard key={productData.id} product={productData} />
      ))}
    </Wrapper>
  );
};

export default Clothes;
