  import React, { useEffect, useState } from 'react';
  import { auth } from '../../Firebase/Firebase';
  import { Container, Row, Col } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';
  import Write from './Write';
  import Read from './Read';
  import Navbars from '../General/Navbar';
  import Footer from '../General/Footer';


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
        <h1 style={{fontFamily: 'Poppins, sans-serif',marginBottom:'2em',marginLeft:'2em'}}>Your dashboard</h1>
        <Container>
          <Row>
            <Col>
              <Read itemAdded={itemAdded} maxItems={3}/>
            </Col>
            <Col>
              <Write onItemAdded={handleItemAdded} />
            </Col>
          </Row>
        </Container>
        <Footer/> 
      </div>
    );
  };

  export default View;
