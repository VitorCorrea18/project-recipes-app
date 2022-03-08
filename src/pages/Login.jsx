import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PASSWORD_LENGTH, emailRegex } from '../helpers/constants';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (emailRegex.test(email) && password.length > PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  return (
    <Form>
      <h1>Login</h1>
      <FormControl
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email }
      />
      <FormControl
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
      />
      <Button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ disabled }
      >
        Enter
      </Button>
    </Form>
  );
}
