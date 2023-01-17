import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Image,
  Button,
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";

function ProductDetailToko() {
  let { productId } = useParams();

  const [data, setData] = useState({});

  const url =
    "http://milkapi.ciparimilkyland.com/alltoko.php?id=" + productId;

  console.log("urlnya" + { url });
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>{productId}</h1>

      {data.length > 0 &&
        data.map((dinamis, key) => {
          return (
            <Container className="mt-5">
                <Row className="row justify-content-md-center">
              <Col sm className="">
                <h1 className="text-left">{dinamis.title}</h1>
              <Card  className="mt-4">
                  
                    <Card.Img
                      key={dinamis.image}
                      // placeholder="https://i.imgur.com/HcFFOqt.png"
                      style={({ width: "100%" }, { height: "100%" })}
                      src={dinamis.image}
                     className="maxseparo cenimgdetail"
                    />
                  </Card>
                </Col>
                <p className="text-left mx-3 mt-5">{dinamis.description}</p>
            
              </Row>
            </Container>
          );
        })}
    </div>
  );
}

export default ProductDetailToko;
