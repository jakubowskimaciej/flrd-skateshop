import React from 'react';
import {
  DirectoryWrapper,
  ImageWrapper,
  TextWrapper,
} from './DirectoryItem.styles';

const DirectoryItem = ({ itemData: { imageUrl, title } }) => {
  return (
    <DirectoryWrapper>
      <ImageWrapper image={imageUrl} />
      <TextWrapper>
        <h2>{title}</h2>
        <span>show now</span>
      </TextWrapper>
    </DirectoryWrapper>
  );
};

export default DirectoryItem;
