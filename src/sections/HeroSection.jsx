import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image } from "react-bootstrap";

HeroSection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

function HeroSection({ isDarkTheme }) {
  const [text, setText] = useState("");
  const fullText = "“Bekerja Bersama Merangkul Semua”";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

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
            <p className="lead typewriter">{text}</p>
            <br></br>
            <audio
              controls
              loop={true}
              data-bs-theme={isDarkTheme ? "light" : "dark"}
              src="./assets/music/mh_jingle.mp3"
            >
              Minta Rela, Browser Pian Kada Mendukung Gasan Memutar Lagu.
            </audio>
            <p className="fw-bold">&uarr; Lagu Muhidin-Hasnur &uarr;</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
