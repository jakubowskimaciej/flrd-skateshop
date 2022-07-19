import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';

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
        <Route path="/auth" element={<Login />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
