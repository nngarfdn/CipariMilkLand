import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import CarouselContainer from '../Component/CarouselContainer';

class Toko extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("https://api.kampunganggurplumbungan.com/toko/alltoko.php")
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
          <h2 className="mt-5"><b>Toko Anggur</b></h2>
            <p>Temukan Toko anggur favoritmu sekarang !</p>
            <br></br>
            <Row>
              {this.state.users.map((dinamis, key) => {
                return (
                  <Col sm xs={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }}>
                      <Link to={`/detailtoko/${dinamis.id}`} className="link">
                    <Card
                      className="mt-3"
                      key={dinamis.id}
                      style={({ width: "100%" }, { height: "250px" })}
                    >
                    
                      <Card.Img
                        key={dinamis.foto}
                        style={({ width: "100%" }, { height: "150px" })}
                        src={dinamis.foto}
                        className="cenimg"
                      />
                      <Card.Body>
                        <Card.Text classsName="fcard max-lines">{dinamis.namatoko}</Card.Text>
                      
                        <Card.Text className="max-lines-toko">
                          {/* Layanan : {dinamis.pelayanan} */}
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

export default Toko;
