import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    bottom: 1.2rem;
  }
`;
