import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Anggur from "./Anggur";
import Toko from "./Toko";
import ProductDetail from "./ProductDetail";
import ProductDetailToko from "./ProductDetailToko";
import News from "./News";
import ProductDetailNews from "./ProductDetailNews";
// import { Link, Route, Switch, Redirect } from "wouter";


import { BrowserRouter as BrowserRouter, Route, Redirect, HashRouter   } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
 
  <BrowserRouter>
     
        <Route exact path="/" component={Home}>
        </Route>
          {/* <Redirect to="/home" /> */}
        <Route path="/home">
          <Home />
        </Route>
     
        <Route path="/anggur" component={Anggur}>
          <Anggur />
        </Route>

        <Route path="/toko" component={Toko}>
          <Toko />
        </Route>

        <Route path="/berita" component={Toko}>
          <News />
        </Route>

        <Route path="/detailanggur/:productId">
          <ProductDetail />
        </Route>

        <Route path="/read/:productId">
          <ProductDetailNews />
        </Route>
  
  
        <Route path="/detailtoko/:productId">
          <ProductDetailToko />
        </Route>
  
      </BrowserRouter>

    </div>
  );
}


export default App;
