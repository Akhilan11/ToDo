import React from 'react'
import { Col, Container,Image,Row } from 'react-bootstrap'

import footer from '../../Images/Footer.png'

const Footer = () => {
  return (
    <div>
      <Container>
        <footer>
          <Row>
          <Col><Image src={footer} style={{width:'20%'}}/>
          <p>© 2023 Copyright : All Rights Reserved | Developed by Akhilan A</p></Col>
          <Col><h5 style={{fontFamily:'Poppins, sans-serif',fontWeight:400}} className='d-flex justify-content-end d-flex align-items-end'>Organise it all</h5></Col>
          </Row>
        </footer>
      </Container>
    </div>
  )
}

export default Footer