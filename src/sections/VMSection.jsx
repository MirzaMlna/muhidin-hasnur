import { Container, Row, Col } from "react-bootstrap";

export default function VMSection() {
  return (
    <section id="vmSection" className="text-start py-5 ">
      <Container>
        <h1 className="mb-5 fw-bold ">
          <i className="bi bi-file-earmark-text text-mh-primary"> </i>Visi Misi
          <div className="section-title-line"></div>
        </h1>
        <Row className="px-lg-0 px-2">
          <Col md={6}>
            <h3 className="fw-bold">Visi</h3>
            <h5 className="fw-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              iusto odio soluta iste facere quisquam praesentium itaque
              consectetur sint obcaecati.
            </h5>
          </Col>
          <Col md={6}>
            <h3 className="fw-bold">Misi</h3>
            <h5 className="fw-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ratione, labore ullam voluptates doloremque perspiciatis fugiat
              dolor temporibus harum alias est soluta dolores officiis
              cupiditate nulla molestias, neque quidem minima!
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
