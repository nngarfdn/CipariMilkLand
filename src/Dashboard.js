import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./App.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      idEdit: null,
    };
    console.log(localStorage.getItem("token"));
  }

  componentWillMount() {
    const url = "https://nanang.sade.my.id/apianggur/allanggur.php";
    axios
      .get(url)
      .then((data) => {
        console.log(data.users);
        this.setState({ list: data.data });
      })
      .catch(function (err) {
        console.log(err);
        console.log(err.response);
      });
  }

  editBatik = (id) => {
    this.setState({ idEdit: id });
    console.log(id);
  };

  render() {
    if (this.state.idEdit != null) {
      return <Redirect to={{ pathname: "/edit", state: this.state.idEdit }} />;
    }

    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Macam Batik Indonesia</h1>
            <br></br>
            <Row>
              {this.state.list.map((dinamis, key) => {
                return (
                  <Col lg={3}>
                    <Card key={dinamis.id}>
                      <Card.Img
                        key={dinamis.foto}
                        style={({ width: "100%" }, { height: "180px" })}
                        src={dinamis.foto}
                      />
                      <Card.Body>
                        <Card.Title>{dinamis.namaanggur}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {" "}
                          Nama ilmiah : {dinamis.namailmiah}
                        </Card.Subtitle>
                        <Card.Text className="max-lines">
                          {dinamis.deskripsi}
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
