import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

function Tentang() {
  return (
    <div className="background-tentang d-flex h-200 vcenter">
      <Container>
        <div class="">
          <Row
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col sm className="">
              <Image
                className="pt-3 maxwid"
                src="https://i.imgur.com/MiA4idJ.png"
              />
            </Col>
            <Col sm className="maxheigjt">
              <h3 className="text-left pt-3 mx-5 mt-0 font-tentang maxheigjt text-color-green">
                Informasi
              </h3>
              <p className="center my-2 mx-5 text-left pb-5 maxheigjt">
              Produk susu dan yogurt terbuat dari susu segar premium yang dihasilkan dari bahan-bahan terbaik. Susu berkualitas tercermin dari cara memperlakukan sapinya. Peternak di Kecamatan Cipari menjaga kebersihan kandang dan segala jenis pakan ternak terbebas dari berbagai bahan pengawet.                
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Tentang;
