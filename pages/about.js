import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>À propos</h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          <strong>Wizza Free Shop</strong> est une boutique digitale fondée par 
          <strong> Deme Aboubacar</strong>.  
          Notre mission est de proposer des produits numériques et physiques 
          avec un style moderne, une interface claire et une expérience premium.  
        </p>
        <p style={{ maxWidth: "700px", margin: "40px auto 0", lineHeight: "1.8" }}>
          Nous mettons en avant la créativité, la qualité et l’innovation pour 
          offrir à notre communauté une plateforme unique et accessible.  
        </p>
      </div>

      <Footer />
    </div>
  );
}
