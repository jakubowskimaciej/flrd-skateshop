import React, { useContext } from 'react';
import { ProductsContext } from 'providers/ProductsProvider';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { Wrapper } from './Clothes.styles';

const Clothes = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Wrapper>
      {products.map((itemData) => (
        <ProductCard key={itemData.id} itemData={itemData} />
      ))}
    </Wrapper>
  );
};

export default Clothes;
