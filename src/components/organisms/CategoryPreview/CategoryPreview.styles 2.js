import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    color: var(--color-darkGrey);
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const ClothesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 35rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 3rem 2rem;
  gap: 4rem 2rem;
`;
