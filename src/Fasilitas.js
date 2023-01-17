import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Fasilitas() {
  return (
    <Container>
      <h3 className="font-weight-bold"  >Fasilitas</h3>
  
      <Row className="mt-2 my-2">
        <Col sm>
          <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/izUk7SZ.png"
            alt="parkir"
          />

          <p>Parkir Luas</p>

          
        </Col>
        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/2gPhSgN.png"
            alt="parkir"
          />

          <p>Gedung Pertemuan</p>
          
        </Col>

        <Col sm>
        <img
            className="center mt-4 mb-3 mw-50"
            src="https://i.imgur.com/FgKmjUE.png"
            alt="parkir"
          />

          <p>Tempat Ibadah</p>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Fasilitas;
