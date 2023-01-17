import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri';

function Footer() {
    return (
      <div className="background-footer h-75">
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
               <Row>
                   <Col sm>
                   <Image className="pt-5 logofooter" src="https://i.imgur.com/Lv4eC6j.png" />
                   <p className="text-left mt-2">  Kampung Anggur Plumbungan merupakan sebuah desa yang memberikan
                wisata visual mengenai tanaman anggur.</p>
                   </Col>
                   <Col sm>
                   <p className="font-weight-bold pt-5 mx-5 text-left">Link Terkait</p>
                   <ul className="mx-2">
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Tentang</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Rumah Anggur</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Kegiatan</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer"> . </a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer"> . </a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer">. </a>
              </li>
            </ul>
                   </Col>
               </Row>
              </Col>
              <Col sm className="">
              <Row>
                   <Col sm>
                         <p className="font-weight-bold pt-5 mx-5 text-left">Layanan</p>
                   <ul className="mx-2">
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Petik anggur</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Bibit anggur</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Media tanam</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Makanan Olahan</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Odong odong</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-white">Bank sampah</a>
              </li>
            </ul>
                   </Col>
                   <Col sm>
                   <p className="font-weight-bold pt-5 mx-5 text-left">Rach Us</p>
                   <ul className="mx-2">
              <li className="list-unstyled text-left mt-2 ">
                <a href="#!" className="text-white">email : plumbungankampunganggur@gmail.com</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="https://www.instagram.com/kampung_anggur_plumbungan/" className="text-white">instagram : @kampung_anggur_plumbungan</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="https://www.facebook.com/KampungPengAngguran" className="text-white">facebook : Kampung Anggur Plumbungan Official</a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer"> . </a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer"> . </a>
              </li>
              <li className="list-unstyled text-left mt-2">
                <a href="#!" className="text-footer">. </a>
              </li>
            </ul>
                       
                   </Col>
               </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
  
  export default Footer;
  