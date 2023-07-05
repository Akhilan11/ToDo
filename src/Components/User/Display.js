import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


const Display = ({todoList}) => {
  
    console.log(todoList)
    return (
    <div>
    <h1 style={{fontFamily:'Poppins, sans-serif'}}>Your Tasks</h1>
        {todoList && todoList.length > 0 ? (
        todoList.map((doc) => (
        <Container key={doc.id}>
            <Card style={{margin:'0.5em'}}>
            <Card.Body>
                <Card.Title>{doc.Task}</Card.Title><hr/>
                <Row>
                <Col><Card.Text>Due Date : {doc.Date}</Card.Text></Col>
                <Col><Card.Text>Category : {doc.Category}</Card.Text></Col>
                <Col><Card.Text>Tag : {doc.Tag}</Card.Text></Col>
                </Row>
            </Card.Body>
            </Card>
        </Container>   
        ))) : (<div>Loading....</div>)
        }
    </div>
  )
}

export default Display