import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { auth, db } from '../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

const Write = ({ onItemAdded }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');

  const email = auth.currentUser?.email;

  const todoRef = collection(db, 'todo');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-GB');
    setDate(formattedDate);
  };

  const number = 0;

  const addTask = async () => {
    try {
      await addDoc(todoRef, {
        Task: task,
        Date: date,
        Category: category,
        Tag: tag,
        Email: email,
        Reward:number,
        TaskDone:false
      });
      alert('Item added');
      onItemAdded(); // Notify the parent component about the item added
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div style={{boxShadow:'5px 5px 5px 5px #eeeeee'}}>
      <Container style={{ width: '90%'}}>
      <div style={{margin:'0.5em'}}>
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Add your Task
        </h3>
        <Form>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="+  Add Task"
                  required
                  onChange={(e) => setTask(e.target.value)}
                />
              </Col>
              <Col lg={3}>
                <Form.Control
                  type="date"
                  id="birthdaytime"
                  name="birthdaytime"
                  onChange={handleDateChange}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: '1rem' }}>
              <Col>
                <Form.Select
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Category</option>
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="List">List</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select onChange={(e) => setTag(e.target.value)}>
                  <option># Tag</option>
                  <option value="Priority">Priority</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>

          <Button
            variant="primary"
            style={{ marginTop: '1em' }}
            onClick={addTask}
          >
            Submit
          </Button>
        </Form>
      </div>
      </Container>

    </div>
  );
};

export default Write;
