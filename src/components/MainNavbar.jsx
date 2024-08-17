import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MainNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-light sticky-top py-3"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="#heroSection" className="fw-bold ">
          MUHIDIN HASNUR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#heroSection">
              <i className="bi bi-house"> </i>Beranda
            </Nav.Link>
            <Nav.Link href="#aboutSection">
              <i className="bi bi-people"> </i>Biografi
            </Nav.Link>
            <Nav.Link href="#vmSection">
              <i className="bi bi-file-earmark-text"> </i>Visi Misi
            </Nav.Link>
            <Nav.Link href="#synergySection">
              <i className="bi bi-arrow-repeat"> </i>Sinergi
            </Nav.Link>
            <NavDropdown title="Sosial Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <i className="bi bi-instagram"></i> Instaram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <i className="bi bi-tiktok"></i> Tiktok
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <i className="bi bi-facebook"></i> Facebook
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
