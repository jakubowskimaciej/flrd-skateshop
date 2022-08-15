import React, { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect,
} from 'utils/firebase/firebase.utils';

import { FormWrapper, Wrapper } from '../Registration/Registration.styles';
import { ButtonWrapper } from './Authentication.styles';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';

const initialState = {
  email: '',
  password: '',
};

const Authentication = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { email, password } = formValues;

  const logGoogleUser = async () => {
    await signInWithGoogleRedirect();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormValues(initialState);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password.');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>
      <FormWrapper onSubmit={handleFormSubmit}>
        <FormField
          label="email"
          name="email"
          type="email"
          id="loginEmail"
          onChange={handleInputChange}
          value={formValues.email}
        />
        <FormField
          label="password"
          name="password"
          type="password"
          id="loginPassword"
          onChange={handleInputChange}
          value={formValues.password}
        />
        <ButtonWrapper>
          <Button type="submit">Sign in</Button>
          <Button isSecondary type="button" onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default Authentication;
