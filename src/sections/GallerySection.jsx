import { Col, Container, Row, Card } from "react-bootstrap";

export default function GallerySection() {
  const images = [
    {
      image: "./assets/gallery/balangan.webp",
      title: "Silaturahmi Pembakal Balangan",
    },
    {
      image: "./assets/gallery/kota-baru.webp",
      title: "Silaturahmi Pembakal Kota Baru",
    },
    {
      image: "./assets/gallery/banjarmasin.webp",
      title: "Silaturahmi Pembakal Banjarmasin",
    },
    {
      image: "./assets/gallery/hsu.webp",
      title: "Silaturahmi Pembakal HSU",
    },
    {
      image: "./assets/gallery/tanah-bumbu.webp",
      title: "Silaturahmi Pembakal Tanah Bumbu",
    },
  ];

  return (
    <section id="gallerySection" className="text-start py-5">
      <Container>
        <h1 className="text-start mb-5 fw-bold text-primary">
          <i className="bi bi-image text-mh-orange"> </i>Galeri
          <div className="section-title-line"></div>
        </h1>

        <Row className="px-lg-0 px-2 overflow-x-scroll flex-nowrap">
          {images.map((image, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="px-1">
              <Card>
                <Card.Img variant="top" src={image.image} />
                <Card.Body>
                  <Card.Title>{image.title}</Card.Title>
                </Card.Body>
              </Card>
              {/* <Image
                src={image.image}
                alt={`Image ${index + 1}`}
                fluid
                className="mb-2"
              />
              <p>{image.caption}</p> */}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
