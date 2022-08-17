import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Routes, Route } from 'react-router-dom';
import Clothes from './Clothes';
import Homepage from './Homepage';
import Login from './Login';

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
