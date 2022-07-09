import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <h1>App</h1>
    </Wrapper>
  );
};

export default App;
