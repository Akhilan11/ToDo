import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button,Placeholder } from 'react-bootstrap';
import { auth, db } from '../../Firebase/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import Navbars from '../General/Navbar';
import Footer from '../General/Footer';

const ReadMore = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [todoList, setTodoList] = useState([]);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [number, setNumber] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
        fetchTodoList(user.email);
      } else {
        setUser(null);
        setEmail('');
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    console.log(number);
  }, [number]);

  const fetchTodoList = async (userEmail) => {
    try {
      const todoRef = collection(db, 'todo');
      const querySnapshot = await getDocs(todoRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredData = data.filter((item) => item.Email === userEmail);
      setTodoList(filteredData);

      const completedTasks = filteredData.filter((item) => item.TaskDone).map((item) => item.id);
      setCompletedTasks(completedTasks);
    } catch (e) {
      console.log(e);
    }
  };

  if (!user) {
    return 
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
      </div>;
  }

  const deleteTask = async (id) => {
    try {
      const taskRef = doc(db, 'todo', id);
      await deleteDoc(taskRef);
      alert('Task Deleted');
      window.location.reload();  
    } catch (e) {
      alert(e);
    }
  };

  const updateReward = async (id, reward) => {
    try {
      const ref = doc(db, 'todo', id);
      await updateDoc(ref, { Reward: reward });
      // alert('Done');
    } catch (e) {
      alert(e);
    }
  };

  const markTaskAsDone = async (taskId) => {
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, taskId]);
    setNumber((prevNumber) => prevNumber + 10);
    updateReward(taskId, number + 10);

    try {
      const taskRef = doc(db, 'todo', taskId);
      await updateDoc(taskRef, { TaskDone: true }); // Add a new field 'TaskDone' and set it to true
    } catch (e) {
      console.log(e);
    }
  };

  const undoTaskCompletion = async (taskId) => {
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((id) => id !== taskId));
    setNumber((prevNumber) => prevNumber - 10);
    updateReward(taskId, number - 10);

    try {
      const taskRef = doc(db, 'todo', taskId);
      await updateDoc(taskRef, { TaskDone: false }); // Update the 'TaskDone' field to false
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Navbars />
      <Container>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', marginTop: '2em' }}>Your Tasks</h1>
        {todoList && todoList.length > 0 ? (
          todoList.map((doc) => (
            <Container key={doc.id}>
              <Card
                style={{
                  margin: '0.5em',
                  marginTop: '3em',
                  boxShadow: '3px 3px #eeeeee',
                  opacity: completedTasks.includes(doc.id) ? 0.5 : 1,
                }}
              >
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
                  <br />
                  <div className="button-group" style={{ display: 'flex', justifyContent: 'end', gap: '2em' }}>
                    {!completedTasks.includes(doc.id) ? (
                      <Button className="d-flex justify-content-end" onClick={() => markTaskAsDone(doc.id)}>
                        Task done
                      </Button>
                    ) : (
                      <Button className="d-flex justify-content-end" onClick={() => undoTaskCompletion(doc.id)}>
                        Undo
                      </Button>
                    )}
                    <Button className="d-flex justify-content-end" onClick={() => deleteTask(doc.id)}>
                      Delete the task
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          ))
        ) : (
          <div>
            {[...Array(2)].map((_, index) => (
              <Card key={index} style={{marginTop: '3em'}}>
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
            ))} <br/>
          </div>
        )}

        <Link to="/view">
          <p className="text-muted d-flex justify-content-end" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Go Back...
          </p>
        </Link>
      </Container>

      <Footer/>
    </div>
  );
};

export default ReadMore;
