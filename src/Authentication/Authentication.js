import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './Authentication.css';
import { Button, Container } from 'react-bootstrap';

const Authentication = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignUpClick = () => {
    setSignIn(false);
  };

  const handleLoginClick = () => {
    setSignIn(true);
  };

  return (
    <div>
      {/* <div className="authentication-header">Authentication</div> */}
      <Container>
        <div className="auth-items">
          <Container>
          {signIn ? <Login /> : <Signup />}
          </Container>
        </div>
      </Container>

      <Container>
        <div className="auth-shift">
          {signIn ? <p>Don't have an account? <Button onClick={handleSignUpClick}>Sign up</Button></p> : 
          <p>Already have an account? <Button onClick={handleLoginClick}>Login</Button></p>}
        </div>
      </Container>
    </div>
  );
};

export default Authentication;
