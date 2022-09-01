import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import {
  ClothesWrapper,
  TitleWrapper,
  Wrapper,
} from './CategoryPreview.styles';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleWrapper>
        <h2>{title.toUpperCase()}</h2>
        <Button onClick={() => navigate(`/shop/${title}`)}>view more</Button>
      </TitleWrapper>
      <ClothesWrapper>
        {products
          .filter((item, index) => index < 4)
          .map((productData) => (
            <ProductCard key={productData.id} product={productData} />
          ))}
      </ClothesWrapper>
    </Wrapper>
  );
};

export default CategoryPreview;
