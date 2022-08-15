import { createContext, useState, useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from 'utils/firebase/firebase.utils';

export const UsersContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
