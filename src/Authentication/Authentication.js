import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './Authentication.css';
import { Button, Container } from 'react-bootstrap';
import Navbars from '../Components/General/Navbar';
import Footer from '../Components/General/Footer';

const Authentication = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignUpClick = () => {
    setSignIn(false);
  };

  const handleLoginClick = () => {
    setSignIn(true);
  };

  return (
    <div className="authentication-container">
      <Navbars/>
      {/* <div className="authentication-header">Authentication</div> */}
      <Container style={{margin:'5em'}}>
        <div className="auth-items">
          <Container>
          {signIn ? <Login /> : <Signup />}
          </Container>
        </div>
      </Container>

      <Container>
        <div className="auth-shift text-center">
          <Container>
            {signIn ? <p>Don't have an account? <Button onClick={handleSignUpClick}>Sign up</Button></p> : 
            <p>Already have an account? <Button onClick={handleLoginClick}>Login</Button></p>}
          </Container>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default Authentication;
