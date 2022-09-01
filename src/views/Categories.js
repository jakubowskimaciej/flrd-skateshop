import React, { useContext } from 'react';
import { CategoriesContext } from 'providers/CategoriesProvider';
import { Wrapper } from './Shop.styles';
import CategoryPreview from 'components/organisms/CategoryPreview/CategoryPreview';

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Wrapper>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Wrapper>
  );
};

export default Categories;
