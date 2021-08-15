import React from "react";
import { Card, Col, Container } from "react-bootstrap";

const Cards = [
  {
    path: "/benefits/image1.png",
    desc: "Quiet your mind and calm the storm."
  },
  {
    path: "/benefits/image2.png",
    desc: "Ease your pain and soothe your joints."
  },
  {
    path: "/benefits/image3.png",
    desc: "Sleep tight and wake up refreshed."
  },
]
const VermaAbout = () => {
  return (
    <>
      <Container fluid="lg" className="vh-100">
        <Col md={4} className="verma-about-col-1 mx-auto">
          <h2 className="text-center">Verma's Benefits</h2>
          <p className="text-center py-4">Consectetur velit nostrud commodo ad sint cupidatat ad consequat deserunt velit consequat fugiat est.</p>
        </Col>
        <Col className="d-flex justify-content-xl-evenly flex-wrap">
          {Cards.map(({ path, desc }, index) => {
            return (
              <Col xl={3} md={6} sm={12} xs={12} key={index} className="d-flex justify-content-center mb-xl-0 mb-md-4 mb-sm-4 mb-4">
                <Card className="verma-about-card-item">
                  <Card.Img src={path} />
                  <Card.Body>
                    <Card.Title className="text-center fw-bolder">{desc}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Col>
      </Container>
    </>
  )
}


export default VermaAbout