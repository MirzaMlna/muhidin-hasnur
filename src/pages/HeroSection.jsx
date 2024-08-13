// import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <section id="heroSection" className="bg-light py-5">
      <Container className="d-flex align-items-center justify-content-center">
        <Row className="align-items-center">
          <Col md={6}>
            <Image src="./assets/hero-image.webp" fluid alt="Gambar Hero" />
          </Col>
          <Col md={6} className="text-md-start text-center mt-lg-0 mt-4">
            <h1 className="display-4 fw-bold">MUHIDIN-HASNUR</h1>
            <p className="lead">
              &rdquo;Bekerja Bersama Merangkul Semua&ldquo;
            </p>
            <Button href="#biographySection" variant="primary" size="md">
              Biografi Muhidin Hasnur
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
