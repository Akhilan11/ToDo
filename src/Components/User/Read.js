import React, { useEffect, useState } from 'react';
import { auth, db } from '../../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Card, Col, Container, Row } from 'react-bootstrap';

const Read = ({ itemAdded }) => {
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

  console.log(todoList);

  return (
    <div>
      <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>Your Tasks</h1>
      {todoList && todoList.length > 0 ? (
        todoList.map((doc) => (
          <Container key={doc.id}>
            <Card style={{ margin: '0.5em' }}>
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
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Read;
