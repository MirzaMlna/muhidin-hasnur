import PropTypes from "prop-types";
import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

QNASection.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default function QNASection({ isDarkTheme }) {
  const [openIndex, setOpenIndex] = useState(null);

  const QNAData = [
    {
      question: "Kenapa Harus Muhidin-Hasnur?",
      answer:
        "Karena pasangan Muhidin Hasnur memiliki sinergi yang saling melengkapi. Haji Muhidin dikenal sebagai sosok yang dermawan, rendah hati, religius, dan humoris, serta telah terbukti berhasil dalam membangun Kota Banjarmasin selama satu periode kepemimpinannya, sedangkan Hasnur dengan jiwa muda, inovatif, dan kreatif, membawa energi baru yang fokus pada pengembangan kepemudaan, olahraga, dan pendidikan.",
    },
    {
      question: "H. Muhidin Orang Madura?",
      answer:
        "Banyak oknum yang mengatakan bahwa Bapak H. Muhidin adalah Orang Madura, nyatanya pernyataan itu salah. Bapak H. Muhidin asli orang banua, beliau lahir di Binuang pada tanggal 6 Mei 1958",
    },
    {
      question: "Pertanyaan 3",
      answer: "Jawaban Pertanyaan 3",
    },
    {
      question: "Pertanyaan 4",
      answer: "Jawaban Pertanyaan 4",
    },
    {
      question: "Pertanyaan 5",
      answer: "Jawaban Pertanyaan 5",
    },
    {
      question: "Pertanyaan 6",
      answer: "Jawaban Pertanyaan 6",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="qNASection" className="text-start py-5">
      <Container>
        <h1 className="mb-5 fw-bold text-primary">
          <i className="bi bi-file-earmark-text text-mh-orange"></i> Pertanyaan
          Masyarakat
          <div className="section-title-line"></div>
        </h1>

        <ListGroup data-bs-theme={isDarkTheme ? "dark" : "light"}>
          {QNAData.map((item, index) => (
            <div key={index}>
              <ListGroup.Item
                action
                onClick={() => handleToggle(index)}
                aria-controls={`answer-${index}`}
                aria-expanded={openIndex === index}
              >
                <div className="d-flex justify-content-between align-items-center">
                  {item.question}
                  <i className="bi bi-fingerprint"></i>
                </div>
              </ListGroup.Item>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="p-3 overflow-hidden bg-body"
                  >
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ transformOrigin: "top" }}
                    >
                      {item.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
}
