import { Component } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Algo1 from "./algoComponents/Algo1";
import Algo2 from "./algoComponents/Algo2";

const Nav = (props) => {
  console.log(props);
  return (
    <Row xs="auto" tm="auto" className="mt-3">
      <ListGroup horizontal defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1" onClick={() => props.changeTab(1)}>
          Affine Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" onClick={() => props.changeTab(2)}>
          Atbash Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link3" onClick={() => props.changeTab(3)}>
          Bit Shift Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link4" onClick={() => props.changeTab(4)}>
          Ceaser Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link5" onClick={() => props.changeTab(5)}>
          Hill Climb Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link6" onClick={() => props.changeTab(6)}>
          Rail Fence Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link7" onClick={() => props.changeTab(7)}>
          Rot13 Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link8" onClick={() => props.changeTab(8)}>
          Vernam Cipher
        </ListGroup.Item>
        <ListGroup.Item action href="#link9" onClick={() => props.changeTab(9)}>
          Vigenere Cipher
        </ListGroup.Item>
        <ListGroup.Item
          action
          href="#link10"
          onClick={() => props.changeTab(10)}
        >
          Xor Cipher
        </ListGroup.Item>
      </ListGroup>

      {/* <Col>
                <Button>Algo 1</Button>
            </Col>
            <Col>
                <Button>Algo 2</Button>
            </Col> */}
    </Row>
  );
};

export default Nav;
