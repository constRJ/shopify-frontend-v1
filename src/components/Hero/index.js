import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Button, Col, Container } from "react-bootstrap";
const VermaBanner = () => {
  const animaContainer = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: animaContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/wave/data-color-1.json"
    })
  }, [])
  return (
    <Container fluid="lg" className="px-md-5 px-0">
      <Col className="verma-banner-container d-flex align-items-sm-center align-items-end">
        <Col xl={3} lg={4} sm={4} xs={8} className="verma-banner-info">
          <h1 className="text-sm-start text-center">Pure All Natural CBD Inspired by the Islands of Hawaii</h1>
          <p className="text-sm-start text-center">ZERO THC - all natural cannabidoil</p>
          <Button className="btn cta-primary">Shop Now</Button>
        </Col>
        <Col ref={animaContainer} className="verma-banner-wave-1"></Col>
      </Col>
    </Container>
  );
};

export default VermaBanner;
