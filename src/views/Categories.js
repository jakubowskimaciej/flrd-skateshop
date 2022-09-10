import React from 'react';
import { Wrapper } from './Shop.styles';
import CategoryPreview from 'components/organisms/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from 'features/categories/categories.selector';

const Categories = () => {
  const { categoriesMap } = useSelector(selectCategoriesMap);

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
