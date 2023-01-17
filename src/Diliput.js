import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Diliput() {
  return (
    <Container className="mt-5">
      <h3 className="font-weight-bold"  >Diliput oleh</h3>
  
      <Row className="mt-1 my-1">
        <Col sm>
          <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/yJk9gRd.png"
            alt="kompas"
          />
          
        </Col>
        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/xRQ6d8p.png"
            alt="replublika"
          />

       
        </Col>

        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/d0nCbZz.png"
            alt="detik"
          />

       
        
        </Col>

        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/AlxpFAY.png"
            alt="parkir"
          />

        </Col>

        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/4awLSL9.png"
            alt="tribun"
          />

    
        
        </Col>
      </Row>
    </Container>
  );
}

export default Diliput;
