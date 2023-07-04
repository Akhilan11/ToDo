import React from 'react'
import './Home.css'
import { Row, Col, Container, Image,Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>

        <Container>
            <center>
                <h1 className='Header'>Experience a new level of organization and productivity with ToDoMaster</h1>
                <p className='tag'>Maximize productivity and efficiency. Streamline tasks, unleash your potential.</p>
                <Button style={{backgroundColor:'#283618',borderRadius:'15%'}}>Plan your task now</Button>
            </center> <br/><br/>

            <Row>
                <Col>
                    <h3 className='home-content-one'>Organize. Prioritize. Achieve. Productivity unleashed, goals accomplished.</h3>
                    <p className='home-content-one-part'>Plan your personal task management, daily routines, meeting planning 
                       and goal tracking with us </p>
                </Col>
                <Col><Image src='../../../Images/Home.png'/></Col>
            </Row> <br/><br/>

            <Row>
                <Col><Image src='../../Images/Home2.png'/></Col>
                <Col>
                    <h3 className='home-content-two'>Live the present and plan your future</h3>
                    <p className='home-content-two-part'>TodoMaster automatically sorted into Today, Upcoming and 
                    custom Filter views to help you focus on your most important things.</p>
                </Col>
            </Row>

        </Container>

    </div>
  )
}

export default Home
