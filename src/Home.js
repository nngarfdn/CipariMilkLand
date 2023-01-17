import React from "react";
import Carausel from "./Carausel"
import Tentang from "./Tentang"
import Layanan from "./Layanan"
import RumahAnggur from "./RumahAnggur"
import Fasilitas from "./Fasilitas"
import Anim from "./Anim"
import Lokasi from "./Lokasi"
import Video from "./Video";
import Footer from "./Footer";
import Diliput from "./Diliput";

function Home() {
  return (
    <div className="App" >
      <div id="carausel">
          <Carausel/>
      </div>

      <div id="tentang" className="">
          <Tentang/>
      </div>

      <div id="video" className="">
          <Video/>
      </div>

      <div id="layanan">
          <Layanan/>
      </div>

  


      <div className="footer mt-5">
        <Footer/>
      </div>

    </div>
    
     

  
  );
}

export default Home;
