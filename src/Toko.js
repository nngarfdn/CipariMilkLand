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
    fetch("http://milkapi.ciparimilkyland.com/alltoko.php")
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
          <h2 className="mt-5"><b>Outlet Cipari Milky Land</b></h2>
            <br></br>
            <Row>
              {this.state.users.map((dinamis, key) => {
                return (
                  <Col sm xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }}>
                      <Link to={`/detailtoko/${dinamis.id}`} className="link">
                    <Card
                      className="mt-3"
                      key={dinamis.id}
                      style={({ width: "100%" }, { height: "250px" })}
                    >
                    
                      <Card.Img
                        key={dinamis.image}
                        style={({ width: "100%" }, { height: "150px" })}
                        src={dinamis.image}
                        className="cenimg"
                      />
                      <Card.Body>
                        <Card.Text classsName="fcard max-lines">{dinamis.title}</Card.Text>
                      
                        <Card.Text className="max-lines-toko">
                          {/* Layanan : {dinamis.description} */}
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
