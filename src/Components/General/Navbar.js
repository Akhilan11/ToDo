import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import Logo from '../../Images/Logo.png'

import { auth } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Navbars = () => {
  
  const email = auth.currentUser?.email;
  const navigate = useNavigate()

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert('Signed Out Successfully');
        navigate('/');
      })
      .catch((e) => {
        alert(e);
      });
  };


  return (
    <Navbar className="navbar transparent ">
    <Container>
      <Image src={Logo} style={{width:'10%'}}/>
      <h1 style={{paddingTop:'2em',fontFamily:'Poppins, sans-serif',fontWeight:900}}>ToDo Master</h1>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
          { email ? <Navbar.Text>{'Signed is as : ' + email} <Button onClick={signOut}>Logout</Button> </Navbar.Text> : null}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars