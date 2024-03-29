import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;

  img {
    width: 30%;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
