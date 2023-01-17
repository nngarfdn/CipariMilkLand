import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

// import CarouselContainer from '../Component/CarouselContainer';

class Anggur extends Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.date = { date: "" };
  }

  componentDidMount() {
    fetch("https://api.kampunganggurplumbungan.com/news/alltoko.php")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users });
     
      });
  }

  onDateFormat(ii)  {
    var tg = ii;
    var formatted = moment.unix(tg).format('MMMM Do YYYY, h:mm a');
    this.setState({ date: formatted });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h2 className="mt-5">
              <b>Berita Kampung Anggur</b>
            </h2>
            {/* <p>Temukan jenis anggur favoritmu sekarang !</p> */}
            <br></br>
            <Row>
              {this.state.users.map((dinamis, key) => {
                return (
                  <Container>
                    <Col
                      sm
                      xs={{ span: 25, order: 12 }}
                      md={{ span: 25, order: 12 }}
                    >
                      <Link to={`/read/${dinamis.id}`} className="link">
                        <Card
                          className="mt-4 bdradius w-100"
                          key={dinamis.id}
                          style={{ height: "340px" }}
                        >
                          <Card.Img
                            key={dinamis.foto}
                            style={{ height: "250px" }}
                            src={dinamis.foto}
                            className="cenimgnews"
                          />
                          <Card.Body>
                            <Card.Title className="text-left">
                              {dinamis.title}
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-5 coloranggur"> */}
                            {/* <Row>
                          <Col sm> {" "}
                         <Card.Img scr="https://i.imgur.com/VYIy9E2.png" /></Col>
                          <Col sm> {dinamis.namailmiah || "-"}</Col>
                        </Row> */}

                            <div></div>
                            {/* </Card.Subtitle> */}
                            
                            <Card.Subtitle className="text-right pb-3 text-secondary">
                              {dinamis.dateCreated}
                              
                            </Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  </Container>
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
