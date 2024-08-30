import { Container, Row, Col, Image, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <section
      id="heroSection"
      className="d-flex align-items-center justify-content-center pb-5"
    >
      <Container className="">
        <Row className="align-items-center">
          <Col md={5}>
            <Image
              src="./assets/images/hero-image.webp"
              fluid
              alt="Gambar Hero"
            />
          </Col>
          <Col md={1}></Col>
          <Col md={6} className="text-md-start text-center mt-lg-0 mt-4">
            <h1 className="display-4 fw-bold">MUHIDIN-HASNUR</h1>
            <p className="lead">
              &ldquo;Bekerja Bersama Merangkul Semua&rdquo;
            </p>
            <Button
              href="#aboutSection"
              className="bg-mh-primary"
              variant="primary"
              size="md"
            >
              Selengkapnya
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
