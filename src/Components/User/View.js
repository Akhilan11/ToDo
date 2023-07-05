import React, { useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Write from './Write';
import Read from './Read';
import Navbars from '../General/Navbar';

const View = () => {
  const [user, setUser] = useState(null); // Track the authenticated user
  const [itemAdded, setItemAdded] = useState(false); // Track if an item is added

  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
        navigate('/');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const handleItemAdded = () => {
    setItemAdded(true);
  };

  useEffect(() => {
    // Refresh the output when an item is added
    if (itemAdded) {
      setItemAdded(false);
    }
  }, [itemAdded]);

  if (!user) {
    // Render a loading indicator or redirect to a login page
    return <p>Loading...</p>;
  }

  return (
    <div>
        <Navbars />
        <div style={{marginTop:'5em'}}></div>
      <Container>

        <Row>
          <Col>
            <Read itemAdded={itemAdded} />
          </Col>
          <Col>
            <Write onItemAdded={handleItemAdded} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default View;
