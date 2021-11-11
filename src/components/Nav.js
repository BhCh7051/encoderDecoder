import { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Algo1 from './algoComponents/Algo1';
import Algo2 from './algoComponents/Algo2';

const Nav = (props) => {
    console.log(props);
    return(
        <Row xs="auto" tm="auto" className="mt-3">

            <ListGroup horizontal defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1" onClick={() => props.changeTab(1)}>Algorithm 1</ListGroup.Item>
                <ListGroup.Item action href="#link2" onClick={() => props.changeTab(2)}>Algorithm 2</ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={() => props.changeTab(3)}>Algorithm 3</ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={() => props.changeTab(4)}>Algorithm 4</ListGroup.Item>
            </ListGroup>

            {/* <Col>
                <Button>Algo 1</Button>
            </Col>
            <Col>
                <Button>Algo 2</Button>
            </Col> */}

        </Row>
    )
}

export default Nav;