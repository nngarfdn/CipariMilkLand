import React from "react";
import { Carousel, Caption } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import useTypewriter from "use-typewriter";
import Anim from "./Anim"




function Carausel() {

  return (
    <div className="background-image App"  style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
          <Anim/>
  
    </div>

    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://i.imgur.com/0b6CfwF.png"
    //       alt="Slide 1"
    //     />
    //     <Carousel.Caption className="center">
    //       {/* <h1>Kampung Anggur Plumbungan</h1> */}
    //       {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://i.imgur.com/eBZ4z5j.png"
    //       alt="Second slide"
    //     />

    //     {/* <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption> */}
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://i.imgur.com/3PRZ8Zy.png"
    //       alt="Third slide"
    //     />

    //     {/* <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption> */}
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Carausel;
