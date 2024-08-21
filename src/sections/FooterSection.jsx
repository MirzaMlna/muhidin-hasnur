import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

Footer.propTypes = {
  isDarkTheme: PropTypes.bool,
};
export default function Footer({ isDarkTheme }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={isDarkTheme ? "bg-dark" : "bg-light"}>
      <Container>
        <Row className="py-3">
          <Col className="text-center">
            <p>
              &copy; {currentYear} Muhidin Hasnur Official. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
