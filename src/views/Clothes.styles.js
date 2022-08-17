import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 35rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 4rem 2rem;
  gap: 4rem 2rem;
`;
