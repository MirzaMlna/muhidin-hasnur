import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

AutoScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
  scrollSpeed: PropTypes.number,
};

export default function AutoScrollContainer({ children, scrollSpeed = 20 }) {
  const scrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const controls = useAnimation();

  // Start automatic scrolling
  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      if (!isUserInteracting) {
        intervalId = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
          }
        }, scrollSpeed); // Adjust the speed of the auto-scroll here
      }
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isUserInteracting, scrollSpeed]);

  // Event listeners for user interaction
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    controls.stop(); // Stop motion animation
  };

  const handleUserRelease = () => {
    setIsUserInteracting(false);
  };

  return (
    <motion.div
      ref={scrollRef}
      className="overflow-x-scroll flex-nowrap"
      style={{ display: "flex", gap: "1rem" }}
      animate={controls}
      onMouseDown={handleUserInteraction} // Detect click/hold
      onTouchStart={handleUserInteraction} // Detect touch
      onMouseUp={handleUserRelease}
      onTouchEnd={handleUserRelease}
    >
      {children}
    </motion.div>
  );
}
