import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import CarouselContainer from '../Component/CarouselContainer';

class Anggur extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://api.kampunganggurplumbungan.com/anggur/allanggur.php")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users });
      });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h2 className="mt-5"><b>Daftar Tanaman Anggur</b></h2>
            <p>Temukan jenis anggur favoritmu sekarang !</p>
            <br></br>
            <Row>
              {this.state.users.map((dinamis, key) => {
                return (
                  <Col sm xs={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }}>
                      <Link to={`/detailanggur/${dinamis.id}`} className="link">
                    <Card
                      className="mt-3 bdradius"
                      key={dinamis.id}
                      style={({ height: "230px" })}
                    >
                    
                      <Card.Img
                        key={dinamis.foto}
                        style={( { height: "140px" })}
                        src={dinamis.foto}
                        className="cenimg"
                      />
                      <Card.Body>
                        <Card.Title className="fcard">{dinamis.namaanggur}</Card.Title>
                        <Card.Subtitle className="mb-5 coloranggur">
                        {/* <Row>
                          <Col sm> {" "}
                         <Card.Img scr="https://i.imgur.com/VYIy9E2.png" /></Col>
                          <Col sm> {dinamis.namailmiah || "-"}</Col>
                        </Row> */}
                         
                        <div></div>
                        </Card.Subtitle>
                        <Card.Text className="max-lines marto">
                          {/* {dinamis.deskripsi} */}
                        </Card.Text>

          
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Anggur;
