import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Routes, Route } from 'react-router-dom';
import Clothes from './Clothes';
import Homepage from './Homepage';
import Login from './Login';
import Checkout from './Checkout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
