import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row,Col, Container } from 'react-bootstrap';
import { auth, db } from '../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

const Write = () => {
  
    const [task,setTask] = useState('');
    const [date,setDate] = useState('');
    const [category,setCategory] = useState('');
    const [tag,setTag] = useState('');

    const email = auth.currentUser?.email
    console.log(email);
  
    console.log(task+date+category+tag);

    const todoRef = collection(db,"todo");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        const formattedDate = new Date(selectedDate).toLocaleDateString('en-GB');
        setDate(formattedDate);
    };

    const addTask = async() => {
        try{
            await addDoc(todoRef,
                {
                    Task:task,
                    Date:date,
                    Category:category,
                    Tag:tag,
                    Email:email
                })
            alert('Item added');
        }
        catch (e){
            alert(e);
        }
    }

    return (
    <div>
    <Container style={{width:'90%'}}>
    <h3 style={{display:'flex',justifyContent:'center',fontFamily:'Poppins, sans-serif'}}>Add your Task</h3>
    <Form>
      <Form.Group>
        <Row>
            <Col><Form.Control type="text" placeholder=" +  Add Task" required onChange={(e)=>setTask(e.target.value)}/></Col>
            <Col lg={3}><Form.Control type="datetime-local" id="birthdaytime" name="birthdaytime" onChange={handleDateChange}/></Col>
        </Row>
        <Row style={{marginTop:'1rem'}}>
          <Col>
          <Form.Select onChange={(e)=>setCategory(e.target.value)}>
            <option>Category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="List">List</option>
          </Form.Select>
          </Col>
          <Col>
          <Form.Select onChange={(e)=>setTag(e.target.value)}>
            <option> # Tag</option>
            <option value="Priority">Priority</option>
          </Form.Select>
          </Col>
        </Row>
      </Form.Group>
      
      <Button variant="primary" style={{marginTop:'1em'}} onClick={addTask}>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Write