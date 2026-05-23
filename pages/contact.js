import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>Contact</h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Vous pouvez nous joindre directement via WhatsApp, TikTok ou téléphone,
          ou bien remplir le formulaire ci‑dessous.
        </p>

        {/* Liens directs */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "30px" }}>
          <a href="https://wa.me/22602680798" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.png" alt="WhatsApp" width="40" />
          </a>
          <a href="https://www.tiktok.com/@Wizzabossboss7" target="_blank" rel="noopener noreferrer">
            <img src="/icons/tiktok.png" alt="TikTok" width="40" />
          </a>
          <a href="tel:+22606895317">
            <img src="/icons/phone.png" alt="Téléphone" width="40" />
          </a>
        </div>

        {/* Formulaire de contact */}
        <form style={{ marginTop: "40px", maxWidth: "500px", margin: "auto", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Nom :
            <input type="text" name="name" style={{ width: "100%", padding: "10px", marginTop: "5px" }} />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Email :
            <input type="email" name="email" style={{ width: "100%", padding: "10px", marginTop: "5px" }} />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Message :
            <textarea name="message" rows="5" style={{ width: "100%", padding: "10px", marginTop: "5px" }}></textarea>
          </label>
          <button type="submit" style={{ backgroundColor: "#FFD700", color: "#000", padding: "10px 20px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
            Envoyer
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
