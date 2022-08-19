import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 28rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 0 1.5rem;
  border: 0.1rem solid var(--color-lightGrey);
  background-color: white;
  box-shadow: 0 0.6rem 0.9rem rgba(0, 0, 0, 0.16),
    0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
  top: 9rem;
  right: 4rem;
  z-index: 5;
  border-radius: 0.7rem;
`;

export const ItemsWrapper = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSize.m};
    color: var(--color-darkGrey);
  }
`;
