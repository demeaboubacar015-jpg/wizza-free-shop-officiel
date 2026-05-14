// ✅ Import correct : fichier Feed.js dans components/
import Feed from "../components/Feed";
// ✅ Import correct : fichier Navbar.js dans components/
import Navbar from "../components/Navbar";
// ✅ Import correct : fichier Footer.js dans components/
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* Barre de navigation */}
      <Navbar />

      {/* Bannière d’accueil */}
      <header className="banner">
        <img
          src="/logo.png"
          alt="Wizza Logo"
          style={{
            width: "150px",
            height: "auto",
            display: "block",
            margin: "0 auto 20px",
          }}
        />
        <h1>Bienvenue sur Wizza Free Shop</h1>
        <p>
          Boutique digitale basée à <strong>Ouagadougou, Burkina Faso</strong>.
          Découvrez nos produits exclusifs et contactez-nous directement.
        </p>
      </header>

      {/* Fil d’actualité façon Facebook */}
      <main>
        <Feed />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

