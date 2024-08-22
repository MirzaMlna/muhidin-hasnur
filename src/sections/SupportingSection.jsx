import { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function SupportingSection() {
  const images = [
    "./assets/logos/pan.webp",
    "./assets/logos/pks.webp",
    "./assets/logos/demokrat.webp",
    "./assets/logos/pan.webp",
    "./assets/logos/pks.webp",
    "./assets/logos/demokrat.webp",
  ];

  const rowRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft < maxScrollLeft) {
          rowRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        } else {
          rowRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section className="pt-5 pb-5">
      <Container className="image-gallery">
        <h1 className="text-primary mb-5 fw-bold">
          <i className="bi bi-arrow-up-square text-mh-orange"> </i>Pengusung
          <div className="section-title-line"></div>
        </h1>
        <Row
          ref={rowRef}
          className="px-lg-0 px-2 overflow-x-scroll flex-nowrap"
        >
          {images.map((image, index) => (
            <Col key={index} xs={4} className="px-1">
              <Image src={image} alt={`Image ${index + 1}`} fluid />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
