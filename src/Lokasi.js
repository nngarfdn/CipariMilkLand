import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Container, Row, Col, Card } from "react-bootstrap";

const coords = {
  lat: -7.928680768864426,
  lng: 110.32520891160985
};

const params = {v: '3.exp', key: 'AIzaSyA3qm16Xv-tPM5HQnExcCm4J1j8E4mSdmM'};

class Lokasi extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <div className="d-flex">
      <Container >
      <h3 className="font-weight-bold">Lokasi</h3>
        <Row className="mt-3"> 
          
          <Col  className="d-flex align-items-center mt-5">
            <a classNamme="mx-3 px-3" href="https://www.google.com/maps/place/Kampung+Anggur+Plumbungan/@-7.9288933,110.3229773,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7affbf1f0e0bab:0x91cbf1ed39cba689!8m2!3d-7.9289164!4d110.3252132">
              Jl. Plumbungan, Gedogan, Sumbermulyo, Kec. Bambanglipuro, Bantul, Daerah Istimewa Yogyakarta 55764</a>
          </Col>
          <Col >
          <Gmaps className="float-center text-center align-center align-middle mt-3 py-4 r-5 map"
        width={'100%'}
        height={'100%'}
        position={"absolute"}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Kampung Anggur Plumbungan'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Kampung Anggur Plumbungan :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
          </Col>
        </Row>

      </Container>
      </div>
    );
  }

};

// ReactDOM.render(<Lokasi />, document.getElementById('gmaps'))

export default Lokasi;