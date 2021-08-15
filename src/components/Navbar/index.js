import React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="position-absolute py-5 w-100" >
        <Container fluid="lg">
          <Col md={1} sm={1} className="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Col xxl={2} xl={2} lg={2} md={3} sm={2}>
            <Navbar.Brand href="#home" className="m-0">VERMA FARMS</Navbar.Brand>
          </Col>
          <Col xxl={10} xl={10} lg={10} md={9} sm={1} className="verma-navbar-menu-container d-flex justify-content-between">
            <Col className="verma-navbar-menu-1 d-sm-none d-none d-md-block d-lg-block d-lg-flex d-md-flex">
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Our Story</Nav.Link>
              <Nav.Link href="#">Learn</Nav.Link>
            </Col>
            <Col className="verma-nav-menu-2 justify-content-end d-sm-none d-none d-md-block d-lg-block d-lg-flex d-md-flex">
              <Nav.Link href="#">Commmunity</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} className="d-flex justify-content-end d-block">
              <div className="verma-navbar-cart-container">
                <img src="/logos/cart.svg" alt="verma-cart" />
              </div>
            </Col>
          </Col>
        </Container>
      </Navbar>
    </>
  )
}
export default TopNavbar