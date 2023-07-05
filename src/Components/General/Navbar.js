import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Logo from '../../Images/Logo.png'

const Navbars = () => {
  return (
    <Navbar className="navbar transparent ">
    <Container>
      <Image src={Logo} style={{width:'10%'}}/>
      <h1 style={{paddingTop:'2em',fontFamily:'Poppins, sans-serif',fontWeight:900}}>ToDo Master</h1>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="" style={{textDecoration:'none',color:'black'}}>Home</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars