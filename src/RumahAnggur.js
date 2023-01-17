import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import anggur from './assets/tanggur.png';
import toko from './assets/toko.png';




function RumahAnggur() {

  const history = useHistory();

  function toAnggur() {
    history.push("/anggur");
  }
  function toToko() {
    history.push("/toko");
  }
// tanaman
//   https://i.imgur.com/AUiOLYH.png
// toko
// https://i.imgur.com/TYsNiFX.png

  return (
    // <Container>
 

    //   <Row className="mt-3 my-3">
    //   <h3 className="float-left mx-3 font-weight-bold" >Rumah Anggur</h3>
    //     <Col sm>
    //     <h4 className="float-left mx-3">Tanaman Anggur</h4>
    //       <img
    //         className="center py-3 px-3 img-fluid"
    //         src="https://i.imgur.com/AUiOLYH.png"
    //         alt="tanamananggur"
    //       />
    //       <Row>
    //         <Col xs={6} sm>
    //         <p className="float-left text-justify mx-3">Kuasai tentang berbagai jenis anggur dan penjelasannya</p>
    //         <Button onClick={toAnggur} className="float-right mx-3">Selengkapnya</Button>
    //         </Col>
           
    //       </Row>
         
        
    //     </Col>

    //     <Col sm>
    //     <h4 className="float-left mx-3">Daftar Toko</h4>
    //       <img
    //         className="center py-3 px-3 img-fluid"
    //         src="https://i.imgur.com/TYsNiFX.png"
    //         alt="tanamananggur"
    //       />
    //       <Row>
    //         <Col xs={6} sm>
    //         <p className="float-left text-left mx-3">Ketahui toko yang tersedia di Kampung Anggur Plumbungan</p>
    //         <Button onClick={toAnggur} className="float-right mx-3">Selengkapnya</Button>
    //         </Col>
    //       </Row>
         
        
    //     </Col>
       
    //   </Row>
    // </Container>

    <Container>
       <h3 className="font-weight-bold" >Rumah Anggur</h3>
      <Row className="mt-3 my-3">
        <Col sm>
          <img
            className="center p-4 img-fluid"
            src="https://i.imgur.com/AUiOLYH.png"
            alt="tanamananggur"
          />

          <h4 className="float-left mx-3">Tanaman Anggur</h4>
          <p className="float-left text-justify mx-4">Kuasai tentang berbagai jenis anggur dan penjelasannya</p>
          <Button onClick={toAnggur} className="float-right mx-4">Selengkapnya</Button>
        </Col>
        <Col sm>
        <img
            className="center p-4 img-fluid"
            src="https://i.imgur.com/TYsNiFX.png"
            alt="tanamananggur"
          />
           <h4 className="float-left mx-3">Toko</h4>
          <p className="float-left text-justify mx-3">Ketahui toko yang tersedia di Kampung Anggur Plumbungan</p>
          <Button  className="float-right mx-3" onClick={toToko}>Selengkapnya</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RumahAnggur;
