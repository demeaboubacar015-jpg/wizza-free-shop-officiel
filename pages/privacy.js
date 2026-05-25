import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>
          Politique de confidentialité
        </h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Cette politique explique comment Wizza Free Shop respecte vos données
          personnelles. Notre boutique est accessible librement, sans création
          de compte ni connexion.
        </p>

        <section style={{ textAlign: "left", maxWidth: "700px", margin: "40px auto" }}>
          <h2 style={{ color: "#FFD700" }}>1. Données collectées</h2>
          <p>
            Nous ne collectons pas de comptes utilisateurs ni de mots de passe.
            Les seules données échangées proviennent de vos interactions via
            WhatsApp ou TikTok (nom, numéro, profil).
          </p>

          <h2 style={{ color: "#FFD700" }}>2. Utilisation des données</h2>
          <p>
            Vos informations sont utilisées uniquement pour traiter vos commandes
            et communiquer avec vous. Elles ne sont jamais revendues ni partagées
            avec des tiers.
          </p>

          <h2 style={{ color: "#FFD700" }}>3. Conservation</h2>
          <p>
            Les données échangées via WhatsApp/TikTok sont conservées uniquement
            le temps nécessaire pour finaliser votre commande.
          </p>

          <h2 style={{ color: "#FFD700" }}>4. Sécurité</h2>
          <p>
            Nous utilisons les plateformes officielles (WhatsApp, TikTok) pour
            garantir la sécurité de vos échanges. Wizza Free Shop ne stocke pas
            vos données sur son site.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Vos droits</h2>
          <p>
            Vous pouvez demander la suppression de vos données personnelles en
            nous contactant directement via WhatsApp ou TikTok.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
