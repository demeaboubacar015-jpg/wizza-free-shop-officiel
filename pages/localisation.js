import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Localisation() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>Localisation</h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          <strong>Wizza Free Shop</strong> est basé à 
          <strong> Ouagadougou, Burkina Faso</strong>.  
          Retrouvez‑nous facilement grâce à la carte ci‑dessous.
        </p>

        {/* Carte Google Maps intégrée */}
        <div style={{ marginTop: "40px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63311.123456789!2d-1.561593!3d12.368635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e2b123456789%3A0xabcdef123456789!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sbf!4v1681234567890"
            width="100%"
            height="400"
            style={{ border: "2px solid #FFD700", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
