import PropTypes from "prop-types";
import { Col, Container, Row, Card } from "react-bootstrap";

GallerySection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function GallerySection({ isDarkTheme }) {
  const dataas = [
    {
      image: "",
      title: "Deklarasi Pasangan Muhidin-Hasnur",
      date: "26 Agustus 2024",
    },
    {
      image: "",
      title: "Pendaftaran Pasangan Muhidin-Hasnur Ke KPU",
      date: "29 Agustus 2024",
    },
  ];

  return (
    <section id="gallerySection" className="text-start py-5">
      <Container>
        <h1 className="text-start mb-5 fw-bold">
          <i className="bi bi-image text-mh-primary"> </i>Galeri
          <div className="section-title-line"></div>
        </h1>

        <i
          className={`fs-6 fw-bold ${isDarkTheme ? "text-light" : "text-dark"}`}
        >
          Geser Untuk Melihat Gambar Lainnya
        </i>
        <Row className="px-lg-0 px-2 mt-2 overflow-x-scroll flex-nowrap">
          {dataas.map((data, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="px-1">
              <Card
                data-bs-theme={isDarkTheme ? "dark" : "light"}
                className="mb-3"
              >
                <Card.Img
                  variant="top"
                  src={data.image ? data.image : "./null-image.webp"}
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Subtitle className="mt-3 text-secondary">
                    {data.date}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
