import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function First() {
  return (
    <Container>
      <h3>FASILITAS</h3>
  
      <Row className="mt-5 my-5">
        <Col sm>
          <img
            className="center my-5 mw-50 background-image"
            src="https://i.imgur.com/hhe1HZT.png"
            alt="parkir"
          />

          <p>Parkir Luas</p>

          
        </Col>
       
      </Row>
    </Container>
  );
}

export default First;
