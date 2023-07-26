import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import footer from '../../Images/Footer.png';

const Footer = () => {
  return (
    <div>
        <footer style={{ marginTop: '5em', position: 'relative' }}>
          {/* <Row style={{backgroundColor:'#fafbfa'}}>
              <Col>
                <Container>
                <Image src={footer} style={{ width: '35%',margin:'2em' }} />
                </Container>
              </Col>
              <Col className="d-flex align-items-end">
              <Container>

              <h4
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  display:'flex',
                  justifyContent:'end'
                }}
                >
                Organise it all
              </h4>
              </Container>
            </Col>
          </Row> */}

          <Row>

            <Col style={{backgroundColor:'#fafbfa'}}>
              <Container>
                <p style={{ marginTop: '1em', textAlign: 'center' }}>
                  © 2023 Copyright :
                  All Rights Reserved | Developed by Akhilan A
                </p>
              </Container>
            </Col>
            
          </Row>
        </footer>
    </div>
  );
};

export default Footer;
