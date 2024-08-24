import PropTypes from "prop-types";

MusicPlayer.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function MusicPlayer({ isDarkTheme }) {
  return (
    <div className="text-center fixed-bottom">
      <audio
        controls
        loop={true}
        data-bs-theme={isDarkTheme ? "light" : "dark"}
        src="./assets/music/mh_jingle.mp3"
      >
        Minta Rela, Browser Pian Kada Mendukung Gasan Memutar Lagu.
      </audio>
    </div>
  );
}
