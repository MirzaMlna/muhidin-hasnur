import { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

AboutModal.ProfTypes = {
  id: propTypes.number,
};
export default function AboutModal() {
  const [aboutModal, setAboutModal] = useState(false);
  const mh = [
    {
      id: 1,
      name: "H. Muhidin",
      bornLocation: "Binuang",
      bornDate: "06 Mei 1958",
      age: "66",
      experience: [
        "Anggota DPRD Kabupaten Tapin (2004-2009)",
        "Anggota DPRD Provinsi Kalsel (2009-2010)",
        "Walikota Banjarmasin (2010-2015)",
        "Wakil Gubernur Kalsel (2020-2024)",
      ],
    },
    {
      id: 2,
      name: "H. Hasnuryadi Sulaiman",
      bornLocation: "Banjarmasin",
      bornDate: "21 Juni 1975",
      age: "49",
      experience: [
        "CEO Barito Putera",
        "Komisaris - PT. Putera Barito Berbakti",
        "Komisaris - PT. Hasnur Citra Terpadu",
        "Komisaris - PT. Hasnur Jaya Utama",
        "Anggota Dewan Pembina - Yayasan Hasnur Centre",
      ],
    },
  ];

  return (
    <>
      <Button onClick={() => setAboutModal(true)}>Large modal</Button>

      <Modal
        size="lg"
        show={aboutModal}
        onHide={() => setAboutModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="fw-bold">
            Muhammad Mirza Maulana
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <span className="fw-bold">Tempat Lahir :</span> Banjarmasin
          </h5>
          <h5>
            <span className="fw-bold">Tanggal Lahir :</span> 22 Mei 2024
          </h5>
          <h5>
            <span className="fw-bold">Usia</span> 20 Tahun
          </h5>

          <h5>
            <span className="fw-bold">Pengalaman Menjabat:</span>
          </h5>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}
