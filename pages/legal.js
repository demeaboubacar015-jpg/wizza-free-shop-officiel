import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>Mentions légales</h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          <strong>Wizza Free Shop</strong> est une boutique digitale fondée par 
          <strong> Deme Aboubacar</strong>, basée à Ouagadougou, Burkina Faso.
        </p>

        <h2 style={{ color: "#FFD700", marginTop: "40px" }}>Informations légales</h2>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          - Éditeur du site : Wizza Free Shop  
          - Responsable de publication : Deme Aboubacar  
          - Adresse : Ouagadougou, Burkina Faso  
          - Contact : demeaboubacar015@gmail.com  
        </p>

        <h2 style={{ color: "#FFD700", marginTop: "40px" }}>Protection des données</h2>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Wizza Free Shop respecte les réglementations internationales en matière de protection des données, 
          notamment le RGPD (Règlement Général sur la Protection des Données) et le CCPA (California Consumer Privacy Act).  
          Vos informations personnelles ne sont utilisées que pour améliorer votre expérience sur notre plateforme.
        </p>

        <h2 style={{ color: "#FFD700", marginTop: "40px" }}>Conditions d’utilisation</h2>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          En utilisant ce site, vous acceptez nos conditions générales d’utilisation.  
          Toute reproduction ou utilisation non autorisée du contenu est interdite.
        </p>
      </div>

      <Footer />
    </div>
  );
}
