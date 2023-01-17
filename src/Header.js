import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-green light fixed-top" variant="light">
        <Navbar.Brand
          href="#"
          className="text-header font-norican"
          href="/home"
        >
          <img
            height="30"
            className="d-inline-block align-top mx-4"
            src="https://i.imgur.com/FA00K4q.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" variant="dark" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="ml-auto my-2 my-lg-0 mr-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
             <Nav.Link className="text-header font-inter" href="/">
              Beranda
            </Nav.Link>
            {/* <NavDropdown
              className="text-header"
              title={
                <span className="text-header  my-auto font-inter">
                  Rumah Anggur
                </span>
              }
              id="navbarScrollingDropdown"
            > */}
            
              {/* <NavDropdown.Item href="/anggur">Tanaman Anggur</NavDropdown.Item>
              <NavDropdown.Item href="/toko">Toko</NavDropdown.Item>
            </NavDropdown> */}
           
            <Nav.Link className="text-header font-inter" href="#tentang">
              Tentang
            </Nav.Link>
            <Nav.Link className="text-header font-inter" href="#layanan">
              Informasi
            </Nav.Link>

            <Nav.Link className="text-header font-inter" href="#fasilitas">
              Ragam Produk
            </Nav.Link>

            <Nav.Link className="text-header font-inter" href="/berita">
              Peta
            </Nav.Link>
            <Nav.Link className="text-header font-inter" href="/berita">
              Outlet
            </Nav.Link>

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"  
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
