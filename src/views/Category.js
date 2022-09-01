import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoriesContext } from 'providers/CategoriesProvider';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { ClothesWrapper } from 'components/organisms/CategoryPreview/CategoryPreview.styles';
import { ButtonWrapper, Wrapper } from './Category.styles';
import { Button } from 'components/atoms/Button/Button';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Wrapper>
      <h2>{category.toUpperCase()}</h2>
      <ClothesWrapper>
        {products && products.length ? (
          products.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </ClothesWrapper>
      <ButtonWrapper>
        <Button onClick={() => navigate(-1)}>go back</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Category;
