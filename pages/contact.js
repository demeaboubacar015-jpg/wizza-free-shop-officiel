// ✅ Import correct : fichier Navbar.js doit exister dans /components
import Navbar from "../components/Navbar";
// ✅ Import correct : fichier Footer.js doit exister dans /components
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="contact">
      {/* Barre de navigation */}
      <Navbar />

      <h1>Contactez Wizza Free Shop</h1>
      <p>Vous pouvez nous joindre directement via :</p>

      <ul className="contact-list">
        <li>
          {/* ✅ Numéro WhatsApp : remplace les X par ton vrai numéro */}
          📱 WhatsApp : <a href="https://wa.me/22602680798">+226 02 68 07 98</a>
        </li>
        <li>
          {/* ✅ Lien TikTok : utilise ton vrai profil */}
          🎵 TikTok :{" "}
          <a href="https://www.tiktok.com/@Wizzabossboss7?_r=1&_t=ZN-96FXwljsnfH">
            @Wizzabossboss7
          </a>
        </li>
        <li>
          {/* ✅ Numéro téléphone : remplace les X par ton vrai numéro */}
          ☎️ Téléphone : <a href="tel:+22606895317">+226 06 89 53 17</a>
        </li>
      </ul>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}
