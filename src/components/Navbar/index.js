import React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="verma-navbar-container position-absolute py-5 w-100">
        <Container fluid="lg" className="px-lg-5 px-md-3">
          <Col
            md={1}
            sm={1}
            className="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none ps-sm-5"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Col xxl={2} xl={2} lg={2} md={3} sm={2}>
            <Navbar.Brand href="#home" className="m-0 ps-xl-5 ps-lg-5 ps-md-5">
              VERMA FARMS
            </Navbar.Brand>
          </Col>
          <Col
            xxl={10}
            xl={10}
            lg={9}
            md={9}
            sm={1}
            className="verma-navbar-menu-container d-flex justify-content-between"
          >
            <Col className="verma-navbar-menu-1 d-sm-none d-none d-md-block d-lg-block d-lg-flex d-md-flex justify-content-xxl-start justify-content-xl-center">
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Our Story</Nav.Link>
              <Nav.Link href="#">Learn</Nav.Link>
            </Col>
            <Col className="verma-nav-menu-2 pe-lg-3 justify-content-xl-end justify-content-lg-center d-sm-none d-none d-md-block d-lg-block d-lg-flex d-md-flex">
              <Nav.Link href="#">Commmunity</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Col>
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              className="d-flex justify-content-end d-block"
            >
              <div className="verma-navbar-cart-container pe-md-5 pe-3">
                <img src="/logos/cart.svg" alt="verma-cart" />
              </div>
            </Col>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};
export default TopNavbar;
