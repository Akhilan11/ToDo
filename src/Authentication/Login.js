import React, { useState } from 'react';
import { auth, googleProvider } from '../Firebase/Firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container,Row,Col,Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Authentication.css';
import loginImage from '../Images/Login.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
      navigate('/view');
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
        <h1 className='login-header'>Login Account</h1>
        
        <Row>
          <Col><Image src={loginImage} style={{width:'70%',display:'flex',ustifyContent:'center',margin:'2rem'}}/></Col>
          <Col>
            <Form>
              <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='login-email-text'>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    className='login-email'
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='login-password-text'>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className='login-password'
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleLogin} className='login-button'>
                  Login
                </Button>

                <center>
                  <Button onClick={signInWithGoogle} className="login-google text-center"> Login with Google</Button>
                </center>
              </Container>
            </Form>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Login;
