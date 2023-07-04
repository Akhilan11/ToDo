import React, { useState } from 'react';
import { auth, googleProvider } from '../Firebase/Firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Authentication.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
      navigate('/');
    } catch (e) {
      alert(e);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Login with Google successful');
      navigate('/');
    } catch (e) {
      alert(e);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <Container>
        <h1>Login Account</h1>
        <Form>
          <Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className='login-email form-outline'
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className='login-password'
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <center>
              <p onClick={signInWithGoogle} className="text-muted text-center">
                Login with Google
              </p>
            </center>

            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Container>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
