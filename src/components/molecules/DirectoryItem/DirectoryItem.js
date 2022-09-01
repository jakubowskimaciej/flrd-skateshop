import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DirectoryWrapper,
  ImageWrapper,
  TextWrapper,
} from './DirectoryItem.styles';

const DirectoryItem = ({ itemData: { imageUrl, title } }) => {
  const navigate = useNavigate();

  return (
    <DirectoryWrapper onClick={() => navigate(`/shop/${title}`)}>
      <ImageWrapper image={imageUrl} />
      <TextWrapper>
        <h2>{title}</h2>
        <span>show now</span>
      </TextWrapper>
    </DirectoryWrapper>
  );
};

export default DirectoryItem;
