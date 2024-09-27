import PropTypes from "prop-types";
import { Col, Container, Row, Card } from "react-bootstrap";
import FadeInSection from "../components/FadeInSection";

CampaignPromisesSection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function CampaignPromisesSection({ isDarkTheme }) {
  const datas = [
    {
      image: "./assets/promises/promise-1.webp",
      promise: "Mendorong Pesantren Modern Terpadu.",
    },
    {
      image: "./assets/promises/promise-2.webp",
      promise: "Mendorong Program Paket A, B, dan C.",
    },
    {
      image: "./assets/promises/promise-3.webp",
      promise:
        "Peningkatan kualitas dan akses pendidikan, kesehatan, serta jaminan sosial.",
    },
    {
      image: "./assets/promises/promise-4.webp",
      promise: "Peningkatan transportasi publik ke daerah pelosok.",
    },
    {
      image: "./assets/promises/promise-5.webp",
      promise: "Pembangunan Jembatan Pulau Laut.",
    },
    {
      image: "./assets/promises/promise-6.webp",
      promise: "Pembangunan pelabuhan Internasioal Mekar Putih",
    },
    {
      image: "./assets/promises/promise-7.webp",
      promise: "Mendorong Peningkatan Bandara Internasional Syamsudin Noor",
    },
    {
      image: "./assets/promises/promise-8.webp",
      promise:
        "Meningkatkan Olahraga dan pembangunan stadion bertaraf Internasional.",
    },
    {
      image: "./assets/promises/promise-9.webp",
      promise: "Memperkuat ketahanan pangan dan pengembangan ekonomi kreatif.",
    },
    {
      image: "./assets/promises/promise-10.webp",
      promise: "Meningkatkan pariwisata dan Kebudayaan",
    },
  ];

  return (
    <FadeInSection>
      <section id="campaignPromises" className="text-start py-5">
        <Container>
          <h1 className="text-start mb-5 fw-bold">
            <i className="bi bi-image text-mh-primary"> </i>10 Janji Kampanye
            <div className="section-title-line"></div>
          </h1>

          <i
            className={`fs-3 fw-bold ${
              isDarkTheme ? "text-light" : "text-dark"
            }`}
          >
            Geser Untuk Melihat Janji Lainnya &#10609;
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
                    <Card.Title>{data.promise}</Card.Title>
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
