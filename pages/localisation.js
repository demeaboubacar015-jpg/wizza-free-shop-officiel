import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Localisation() {
  return (
    <div className="localisation">
      <Navbar />
      <h1>Localisation</h1>
      <p>
        Wizza Free Shop est basé à <strong>Ouagadougou, Burkina Faso</strong>.
      </p>
      <p>
        Nous livrons nos produits numériques partout dans le pays et assurons un
        support direct via WhatsApp et TikTok.
      </p>
      <Footer />
    </div>
  );
}
