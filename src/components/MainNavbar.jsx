import { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

MainNavbar.propTypes = {
  handleIsDarkTheme: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

export default function MainNavbar({ handleIsDarkTheme, isDarkTheme }) {
  const [isMusicPlay, setIsMusicPlay] = useState(false);
  const [audio] = useState(new Audio("./assets/music/mh_jingle.mp3"));
  audio.volume = 0.3;

  const handleMusic = () => {
    if (isMusicPlay) {
      audio.pause();
      setIsMusicPlay(false);
    } else {
      audio.play();
      setIsMusicPlay(true);
    }
  };

  return (
    <Navbar
      data-bs-theme={isDarkTheme ? "dark" : "light"}
      className="bg-body sticky-top shadow"
    >
      <Container>
        <Navbar.Brand className="fw-bold">MUHIDIN HASNUR</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="fs-6 pointer" onClick={handleMusic}>
            <i
              className={`bi fs-5 ${
                isMusicPlay ? "bi-pause-circle-fill" : "bi-play-circle-fill"
              }`}
            ></i>
          </Nav.Link>
          <Nav.Link> | </Nav.Link>
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
