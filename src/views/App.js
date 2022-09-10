import React, { useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Homepage from './Homepage';
import Login from './Login';
import Checkout from './Checkout';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'features/user/userSlice';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from 'utils/firebase/firebase.utils';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
