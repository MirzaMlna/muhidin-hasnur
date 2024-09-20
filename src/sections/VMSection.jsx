import { Container, Row, Col, ListGroup } from "react-bootstrap";
import FadeInSection from "../components/FadeInSection";

export default function VMSection() {
  return (
    <FadeInSection>
      <section id="vmSection" className="text-start py-5 ">
        <Container>
          <h1 className="mb-5 fw-bold ">
            <i className="bi bi-file-earmark-text text-mh-primary"> </i>Visi
            Misi
            <div className="section-title-line"></div>
          </h1>
          <Row className="px-lg-0 px-2">
            <Col md={6}>
              <h3 className="fw-bold">Visi</h3>
              <h5 className="fw-light">
                KalSel BEKERJA (Berkelanjutan, Berbudaya, Religi, Dan Sejahtera)
                Menuju Gerbang Logistik Kalimantan.
              </h5>
            </Col>
            <Col md={6}>
              <h3 className="fw-bold">Misi</h3>
              <ListGroup>
                <ListGroup.Item>
                  Pembangunan Manusia Yang Unggul, Berbudaya, Religi, Dan
                  Berakhlak Mulia
                </ListGroup.Item>
                <ListGroup.Item>
                  Pembangunan Infrastruktur Yang Handal
                </ListGroup.Item>
                <ListGroup.Item>
                  Pertumbuhan Ekonomi Yang Berkelanjutan, Merata, Dan Syariah
                </ListGroup.Item>
                <ListGroup.Item>
                  Penguatan Ketahanan Terhadap Peubahan Iklim
                </ListGroup.Item>
                <ListGroup.Item>
                  Tata Kelola Pelayanan Yang Mudah dan Cepat
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </FadeInSection>
  );
}
