import React from "react";
import { Container, Row, Col, Card, Image} from "react-bootstrap";

function Layanan() {
  return (
    <div className="mt-1 d-flex h-200 ">
        <Container>
            <Row>
                <Col sm>
                <h3 className="text-center pt-0 mx-5 mt-0 font-tentang maxheigjt text-color-green">
                Peta
              </h3>
              <Image
                className="mt-1 maxwid"
                src="https://i.imgur.com/Jx5o5LT.png"
              />
            
                </Col>
            </Row>

        </Container>
        </div>
  );
}

export default Layanan;
