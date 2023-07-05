import React from 'react'
import { auth } from '../../Firebase/Firebase'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Write from './Write'
import Display from './Display'

import {Row,Col} from 'react-bootstrap'
import Read from './Read'

const View = () => {

    const user = auth.currentUser?.email
    console.log('getname' + user)

    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        .then(() => {
            alert('Signed Out Successfully');
            navigate('/');
        })
        .catch((e) => {
            alert(e);
        })
    }

    return (
    <div>
    <Container>
        View
        <p>hey {user}</p>
        <Button onClick={signOut}> Logout </Button>
        
        <Row>
            <Col><Read/></Col>
            <Col><Write/></Col>
        </Row>

        {/* <Display/> */}
        
    </Container>
    </div>
  )
}

export default View