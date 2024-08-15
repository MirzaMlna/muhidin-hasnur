// import { useMediaQuery } from "react-responsive";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function AboutSection() {
  const hMuhidin = {
    name: "H. MUHIDIN",
    title: "Calon Gubernur Kalsel",
    bio: "Person 1 Bio",
    image: "./assets/h-muhidin-circle.webp",
  };

  const hasnur = {
    name: "H. HASNURYADI SULAIMAN",
    title: "Calon Wakil Gubernur Kalsel",
    bio: "Person 2 Bio",
    image: "./assets/hasnur-circle.webp",
  };

  return (
    <section id="about" className="vh-100">
      <Container className="text-center">
        <h1 className="text-center mb-4 fw-bold">
          <i className="bi bi-people-fill"> </i>Biografi
        </h1>
        <Row>
          <Col md={6} className="mb-lg-0 mb-5">
            <Image
              className="shadow"
              width="300"
              src={hMuhidin.image}
              fluid
              roundedCircle
            />
            <h2 className="mt-3">{hMuhidin.name}</h2>
            <p>{hMuhidin.title}</p>
            <Button variant="primary">Tampilkan Biografi</Button>
          </Col>
          <Col md={6}>
            <Image
              className="shadow"
              width="300"
              src={hasnur.image}
              fluid
              roundedCircle
            />
            <h2 className="mt-3">{hasnur.name}</h2>
            <p>{hasnur.title}</p>
            <Button variant="warning" className="bg-mh-orange text-light">
              Tampilkan Biografi
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
