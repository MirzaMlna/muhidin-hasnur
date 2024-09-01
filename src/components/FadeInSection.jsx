import { motion } from "framer-motion";
import PropTypes from "prop-types";

function FadeInSection({ children }) {
  // Variants for fade-in and fade-out animation
  const containerVariants = {
    hidden: { opacity: 0, y: -20 }, // Start hidden and moved up
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration of the animation
        ease: "easeOut", // Easing function for smooth animation
        staggerChildren: 0.2, // Stagger effect for child elements
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden" // Ensure it goes to hidden state when leaving viewport
      viewport={{ once: false, amount: 0.2 }} // Set once to false to allow repeated animations
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
