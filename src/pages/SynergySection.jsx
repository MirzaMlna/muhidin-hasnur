import { Container, Row } from "react-bootstrap";

export default function SynergySection() {
  return (
    <section id="synergySection" className="mb-5">
      <Container className="text-start pt-5 px-lg-0 px-5">
        <h1 className="text-primary mb-5 fw-bold pt-5">
          <i className="bi bi-arrow-repeat text-mh-orange"> </i>Sinergi
          <div className="section-title-line"></div>
        </h1>
        <Row>
          <h5 className="fw-light">
            Sinergi antara Haji Muhidin dan Hasnuriyadi HB (Hasnur) sebagai
            pasangan pemimpin menawarkan kombinasi yang kuat dan ideal untuk
            memimpin Kalimantan Selatan. <br />
            <br />
            <span className="fw-bold"> Haji Muhidin</span> dikenal sebagai sosok
            yang dermawan, rendah hati, religius, dan humoris, serta telah
            terbukti berhasil dalam membangun Kota Banjarmasin selama satu
            periode kepemimpinannya, sedangkan{" "}
            <span className="fw-bold"> Hasnur</span> dengan jiwa muda, inovatif,
            dan kreatif, membawa energi baru yang fokus pada pengembangan
            kepemudaan, olahraga, dan pendidikan. <br />
            <br /> Pengalaman mereka sebagai pengusaha sukses memberikan mereka
            keunggulan finansial, menjadikan motivasi mereka untuk memimpin
            lebih pada pengabdian untuk masyarakat. Keduanya memiliki rekam
            jejak yang menunjukkan komitmen mereka dalam meningkatkan
            kesejahteraan masyarakat, melalui pembangunan yang merata, inovasi
            di bidang sosial, pendidikan, dan agama, serta kepemimpinan yang
            jujur dan bertanggung jawab.
          </h5>
        </Row>
      </Container>
    </section>
  );
}
