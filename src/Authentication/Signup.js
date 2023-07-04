import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { auth, googleProvider } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Your account has been registered!');
      navigate('/auth');
    } catch (e) {
      alert(e);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed up with Google successfully');
    } catch (e) {
      alert(e);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup();
  };

  return (
    <div>
      <Container>
      <h1>Signup Account</h1>
        <Form>
          <Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <center>
              <p onClick={signInWithGoogle} className="text-muted text-center">
                SignIn with Google
              </p>
            </center>

            <Button variant="primary" type="submit" onClick={handleSignup}>
              Signup
            </Button>
          </Container>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
