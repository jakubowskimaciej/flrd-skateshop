import React from 'react';
import Registration from 'components/organisms/Registration/Registration';
import Authentication from 'components/organisms/Authentication/Authentication';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 70%;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 10rem;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <Authentication />
      <Registration />
    </Wrapper>
  );
};

export default Login;
