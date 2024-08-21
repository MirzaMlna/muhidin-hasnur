import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

MainNavbar.propTypes = {
  handleIsDarkTheme: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

export default function MainNavbar({ handleIsDarkTheme, isDarkTheme }) {
  return (
    <Navbar
      data-bs-theme={isDarkTheme ? "dark" : "light"}
      className="bg-body sticky-top shadow"
    >
      <Container>
        <Navbar.Brand className="fw-bold">MUHIDIN HASNUR</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>
            <i
              onClick={handleIsDarkTheme}
              className={`text-body fs-5 bi ${
                isDarkTheme ? "bi-sun-fill" : "bi-moon-stars-fill"
              }`}
            ></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
