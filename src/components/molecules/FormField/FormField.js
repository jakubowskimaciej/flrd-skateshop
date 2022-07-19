import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const FormField = ({ label, type, name, id, ...props }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        required
        autoComplete="off"
        {...props}
      />
    </>
  );
};

export default FormField;
