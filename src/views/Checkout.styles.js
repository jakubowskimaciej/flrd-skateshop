import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 70%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0 auto;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--color-lightGrey);

  div {
    text-align: center;
    width: 23%;
    font-size: ${({ theme }) => theme.fontSize.l};

    &:last-child {
      margin-right: 2rem;
    }
  }
`;

export const CheckoutItem = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5rem;

  p {
    width: 23%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0 1rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;

    div {
      font-size: ${({ theme }) => theme.fontSize.l};
      cursor: pointer;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.5rem;
  padding: 1rem 0;

  img {
    width: 8rem;
    border-radius: 0.8rem;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
      0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  }
`;

export const ButtonWrapper = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 2.5rem 5rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 200;

  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;
