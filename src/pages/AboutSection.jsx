import { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AboutModal from "../components/AboutModal";

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMH, setSelectedMH] = useState(null);

  const handleShowModal = (data) => {
    setSelectedMH(data);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const hMuhidin = {
    name: "H. Muhidin",
    bornLocation: "Binuang",
    bornDate: "06 Mei 1958",
    age: "66",
    experience: [
      "Anggota DPRD Kabupaten Tapin (2004-2009)",
      "Anggota DPRD Provinsi Kalsel (2009-2010)",
      "Walikota Banjarmasin (2010-2015)",
      "Wakil Gubernur Kalsel (2020-2024)",
    ],
  };

  const hasnur = {
    name: "H. Hasnuryadi Sulaiman",
    bornLocation: "Banjarmasin",
    bornDate: "21 Juni 1975",
    age: "49",
    experience: [
      "CEO Barito Putera",
      "Komisaris - PT. Putera Barito Berbakti",
      "Komisaris - PT. Hasnur Citra Terpadu",
      "Komisaris - PT. Hasnur Jaya Utama",
      "Anggota Dewan Pembina - Yayasan Hasnur Centre",
    ],
  };

  return (
    <section id="aboutSection" className="pt-5 pb-5">
      <Container className="text-center pt-5">
        <h1 className="text-start mb-5 fw-bold text-primary">
          <i className="bi bi-people-fill text-mh-orange"> </i>Biografi
          <div className="section-title-line"></div>
        </h1>
        <Row>
          <Col md={6} className="mb-lg-0 mb-5">
            <Image
              className="shadow"
              width="300"
              src="./assets/h-muhidin-circle.webp"
              fluid
              roundedCircle
            />
            <h2 className="mt-3">H. Muhidin</h2>
            <p className="fst-italic">Calon Gubernur Kalsel</p>
            <Button
              variant="primary"
              className="shadow-sm"
              onClick={() => handleShowModal(hMuhidin)}
            >
              Tampilkan Biografi
            </Button>
          </Col>
          <Col md={6}>
            <Image
              className="shadow"
              width="300"
              src="./assets/hasnur-circle.webp"
              fluid
              roundedCircle
            />
            <h2 className="mt-3">H. Hasnuryadi Sulaiman</h2>
            <p className="fst-italic">Calon Gubernur Kalsel</p>
            <Button
              variant="warning"
              className="bg-mh-orange text-light"
              onClick={() => handleShowModal(hasnur)}
            >
              Tampilkan Biografi
            </Button>
          </Col>
        </Row>
        <AboutModal
          showModal={showModal}
          selectedMH={selectedMH}
          handleClose={handleCloseModal}
        />
      </Container>
    </section>
  );
}
