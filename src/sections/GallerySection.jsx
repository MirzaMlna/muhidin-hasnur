import PropTypes from "prop-types";
import { Col, Container, Row, Card } from "react-bootstrap";
import FadeInSection from "../components/FadeInSection";

GallerySection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function GallerySection({ isDarkTheme }) {
  const datas = [
    {
      image: "./assets/gallery/pengundian.webp",
      title: "Pengundian Nomor Urut Paslon Gubernur & Wakil Gubernur Kalsel",
      date: "23 September 2024",
    },
    {
      image: "null-image.webp",
      title: "Konsolidasi & Deklarasi Dukungan Relawan Gerakan Indonesia Muda",
      date: "22 September 2024",
    },
    {
      image: "./assets/gallery/deklarasi-relawan.webp",
      title: "Deklarasi Puluhan Tim Relawan Pendukung Muhidin-Hasnur",
      date: "16 September 2024",
    },
    {
      image: "./assets/gallery/baayun-maulid.webp",
      title: "Baayun Maulid - Tapin",
      date: "16 September 2024",
    },
    {
      image: "./assets/gallery/pendaftaran.webp",
      title: "Pendaftaran Pasangan Muhidin-Hasnur Ke KPU",
      date: "29 Agustus 2024",
    },
    {
      image: "./assets/gallery/deklarasi.webp",
      title: "Deklarasi Pasangan Muhidin-Hasnur",
      date: "26 Agustus 2024",
    },
    {
      image: "./assets/gallery/bersama-h-isam.webp",
      title: "Foto Bersama H. Samsudin Andi Arsyad (H. Isam)",
      date: "2024",
    },
  ];

  return (
    <FadeInSection>
      <section id="gallerySection" className="text-start py-5">
        <Container>
          <h1 className="text-start mb-5 fw-bold">
            <i className="bi bi-image text-mh-primary"> </i>Galeri
            <div className="section-title-line"></div>
          </h1>

          <i
            className={`fs-3 fw-bold ${
              isDarkTheme ? "text-light" : "text-dark"
            }`}
          >
            Geser Untuk Melihat Gambar Lainnya &#10609;
          </i>
          <Row className="px-lg-0 px-2 mt-2 overflow-x-scroll flex-nowrap">
            {datas.map((data, index) => (
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
    </FadeInSection>
  );
}
