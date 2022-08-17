import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;

  img {
    height: 38rem;
    max-width: 30rem;
    box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-radius: 0.7rem;
    transition: all 150ms cubic-bezier(0.3, 0.43, 0.96, 0.64);
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.95;
      display: flex;
      justify-content: center;
    }
  }
`;

export const StyledInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-darkGrey);
`;

export const StyledButton = styled(Button)`
  width: 50%;
  position: absolute;
  bottom: 4.5rem;
  display: none;
`;
