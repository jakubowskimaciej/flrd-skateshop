import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: var(--color-darkGrey);
    text-shadow: 0.1rem 0.15rem rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 1rem 4rem;
  }
`;
