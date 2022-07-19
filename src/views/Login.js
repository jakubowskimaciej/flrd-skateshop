import React from 'react';
import Registration from 'components/organisms/Registration/Registration';
import Authentication from 'components/organisms/Authentication/Authentication';
import styled from 'styled-components';

const Wrapper = styled.section`
  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    margin: 5rem auto;
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
