import React from 'react';
import { directories } from 'data/directiories';
import { Wrapper } from './DirectoryMenu.styles';
import DirectoryItem from 'components/molecules/DirectoryItem/DirectoryItem';

const DirectoryMenu = () => {
  return (
    <Wrapper>
      {directories.map((itemData) => (
        <DirectoryItem itemData={itemData} key={itemData.id} />
      ))}
    </Wrapper>
  );
};

export default DirectoryMenu;
