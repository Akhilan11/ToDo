import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { auth, googleProvider } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './Authentication.css'
import signUpImage from '../Images/SignUp.png'  

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
      <h1 className='login-header'>Signup Account</h1>
        <Row>
            <Col><Image src={signUpImage} style={{width:'80%',display:'flex',ustifyContent:'center',margin:'2rem'}}/></Col>
            <Col>
                <Form>
                <Container>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        className='login-email'
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

                    <Button variant="primary" type="submit" onClick={handleSignup} className='login-button'>
                    Signup
                    </Button>

                    <center>
                    <p onClick={signInWithGoogle} className="login-google text-center">
                        SignIn with Google
                    </p>
                    </center>
                </Container>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
