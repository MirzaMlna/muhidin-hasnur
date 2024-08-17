import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function VMSection() {
  return (
    <section id="vmSection" className=" text-center pt-5 pb-5 ">
      <Container className="pt-5">
        <h1 className="mb-5 fw-bold text-primary">
          <i className="bi bi-file-earmark-text text-mh-orange"> </i>Visi Misi
        </h1>
        <Row className="px-5">
          <Col md={6}>
            <h3 className="fw-bold">Visi</h3>
            <h5 className="fw-light text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              iusto odio soluta iste facere quisquam praesentium itaque
              consectetur sint obcaecati.
            </h5>
          </Col>
          <Col md={6}>
            <h3 className="fw-bold">Misi</h3>
            <h5 className="fw-light text-justify">
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
