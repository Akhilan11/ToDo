import React, { useEffect, useState } from 'react';
import { auth, db } from '../../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Card, Col, Container, Row,Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Read = ({ itemAdded,maxItems }) => {
  const [email, setEmail] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email);
          const todoRef = collection(db, 'todo');
          const querySnapshot = await getDocs(todoRef);
          const data = querySnapshot.docs.map((doc) => doc.data());
          const filteredData = data.filter((item) => item.Email === user.email);
          setTodoList(filteredData);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchTodoList();
  }, [itemAdded]); // Add itemAdded to the dependency array

 
  return (
    <div style={{boxShadow:'5px 5px 5px 5px #eeeeee'}}>
      <div>
      <Container>

      <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>Your Tasks</h1>
      {todoList && todoList.length > 0 ? (
        todoList.slice(0, maxItems).map((doc) => (
        // todoList.map((doc) => (
          <Container key={doc.id}>
            <Card style={{ margin: '0.5em',marginTop:'3em',boxShadow:'3px 3px #eeeeee' }}>
              <Card.Body>
                <Card.Title>{doc.Task}</Card.Title>
                <hr />
                <Row>
                  <Col>
                    <Card.Text>Due Date: {doc.Date}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Category: {doc.Category}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Tag: {doc.Tag}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        ))
        ) : (
          <div>
            <Card>
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} /> <hr />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
            </Card>
          </div>
          )}

      <Link to='/view/task'><p className='text-muted d-flex justify-content-end' style={{ fontFamily: 'Poppins, sans-serif' }}>Read more...</p></Link>
      </Container>
      </div>
    </div>
  );
};

export default Read;
