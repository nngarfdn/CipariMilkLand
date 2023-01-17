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

function ProductDetail() {
  let { productId } = useParams();

  const [data, setData] = useState({});

  const url =
    "https://api.kampunganggurplumbungan.com/anggur/allanggur.php?id=" + productId;

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
              <Card  className="mt-5">
                    <Card.Img
                      key={dinamis.foto}
                      // placeholder="https://i.imgur.com/HcFFOqt.png"
                      style={({ width: "100%" }, { height: "100%" })}
                      src={dinamis.foto}
                     className="maxseparo cenimgdetail"
                    />
                  </Card>
                </Col>
                <Col sm>
                <Card.Body>
                    <h2>{dinamis.namaanggur}</h2>
                    <Card.Subtitle className="mb-2 coloranggur mt-3">
                      {" "}
                      {/* Nama ilmiah : {dinamis.pemilik} */}
                    </Card.Subtitle>
                    <Card.Text className="text-justify">
                      <b>Deskripsi</b>
                    </Card.Text>
                    <Card.Text className="text-justify">
                     {dinamis.deskripsi}
                    </Card.Text>
              


                    {/* <Link to={`/products/${dinamis.id}`}><a>Selengkapnya</a></Link>  */}
                    {/* <Button variant="primary" onClick={() => this.editBatik(dinamis.id)}>
                                                    Edit
                                                </Button> */}
                  </Card.Body>
                </Col>
            
              </Row>
            </Container>
          );
        })}
    </div>
  );
}

export default ProductDetail;
