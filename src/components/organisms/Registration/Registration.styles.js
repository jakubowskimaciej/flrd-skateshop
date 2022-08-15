import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40rem;
  height: 40rem;
  padding: 2rem;
  color: var(--color-darkGrey);

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2rem;
`;
