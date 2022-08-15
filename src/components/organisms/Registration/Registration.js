import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from 'utils/firebase/firebase.utils';
import FormField from 'components/molecules/FormField/FormField';
import { FormWrapper, Wrapper } from './Registration.styles';
import { Button } from 'components/atoms/Button/Button';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormValues(initialState);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <h2>I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <FormWrapper onSubmit={handleFormSubmit}>
        <FormField
          label="display name"
          name="displayName"
          type="text"
          id="displayName"
          value={formValues.displayName}
          onChange={handleInputChange}
        />
        <FormField
          label="email"
          name="email"
          type="email"
          id="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          id="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <FormField
          label="confirm password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleInputChange}
        />
        <Button type="submit">Sign up</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default Registration;
