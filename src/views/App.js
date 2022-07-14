import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

const Clothes = () => (
  <>
    <h2>Clothes page</h2>
  </>
);

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
