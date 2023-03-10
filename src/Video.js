import React from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col,Image, Card } from "react-bootstrap";

class Video extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };


    return (
        <div className="mt-1 d-flex h-200 vcenter">
        <Container>
            <Row>
                <Col sm>
                <h3 className="text-center pt-0 mx-5 mt-0 font-tentang maxheigjt text-color-green">
                Ragam Produk
              </h3>
              <Image
                className="mt-1 maxwid"
                src="https://i.imgur.com/Jx5o5LT.png"
              />
              <p className="d-flex justify-content-center my-4 mx-5 text-left pb-5 maxheigjt">
                Produk unggulan di Cipari diantaranya Yogurt dan Susu.          
              </p>
                </Col>
            </Row>

        </Container>
        </div>



    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;