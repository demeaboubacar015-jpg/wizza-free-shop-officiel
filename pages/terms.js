import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>
          Conditions d’utilisation
        </h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Les présentes conditions régissent l’utilisation du site Wizza Free Shop.
          En visitant notre boutique, vous acceptez les règles ci‑dessous.
        </p>

        <section style={{ textAlign: "left", maxWidth: "700px", margin: "40px auto" }}>
          <h2 style={{ color: "#FFD700" }}>1. Accès au site</h2>
          <p>
            L’accès à Wizza Free Shop est libre et ne nécessite ni compte ni
            inscription. Les visiteurs peuvent consulter les produits sans créer
            d’utilisateur.
          </p>

          <h2 style={{ color: "#FFD700" }}>2. Achats</h2>
          <p>
            Les achats se font exclusivement via WhatsApp et TikTok. Aucun paiement
            n’est traité directement sur le site. Les commandes sont confirmées
            uniquement par échange direct avec l’équipe Wizza Free Shop.
          </p>

          <h2 style={{ color: "#FFD700" }}>3. Produits numériques</h2>
          <p>
            Les produits proposés (packs, cours, presets, etc.) sont destinés à un
            usage personnel. Toute reproduction ou distribution non autorisée est
            interdite.
          </p>

          <h2 style={{ color: "#FFD700" }}>4. Données personnelles</h2>
          <p>
            Wizza Free Shop ne collecte pas de comptes utilisateurs. Les échanges
            via WhatsApp et TikTok peuvent impliquer des données personnelles
            (nom, numéro, profil), traitées uniquement pour finaliser la commande.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Responsabilité</h2>
          <p>
            Wizza Free Shop n’est pas responsable des problèmes techniques liés à
            WhatsApp ou TikTok. Les utilisateurs sont seuls responsables de leurs
            échanges et de l’utilisation des produits achetés.
          </p>

          <h2 style={{ color: "#FFD700" }}>6. Modification des conditions</h2>
          <p>
            Wizza Free Shop se réserve le droit de modifier ces conditions à tout
            moment. Les visiteurs sont invités à consulter régulièrement cette
            page.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
