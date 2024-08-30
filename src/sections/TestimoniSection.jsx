import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "react-bootstrap";

TestimoniSection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function TestimoniSection({ isDarkTheme }) {
  const testimonis = [
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
    {
      image: "",
      name: "Nama Tokoh",
      quote: "Ucapan Tokoh Tentang H. Muhidin & H. Hasnuryadi Sulaiman",
    },
  ];

  return (
    <section id="testimoniSection" className="text-start py-5">
      <Container>
        <h1 className="text-start mb-5 fw-bold ">
          <i className="bi bi-person-check text-mh-primary"> </i>Testimoni
          <div className="section-title-line"></div>
          <i className={`fs-6 ${isDarkTheme ? "text-light" : "text-dark"}`}>
            Geser Untuk Melihat Testimoni Lainnya
          </i>
        </h1>
        <Row className="px-lg-0 px-2 overflow-x-scroll flex-nowrap">
          {testimonis.map((testimoni, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="px-1 mb-3">
              <Card data-bs-theme={isDarkTheme ? "dark" : "light"}>
                <Card.Img
                  variant="top"
                  src={testimoni.image ? testimoni.image : "./null-image.webp"}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{testimoni.name}</Card.Title>
                  <Card.Text>{testimoni.quote}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
