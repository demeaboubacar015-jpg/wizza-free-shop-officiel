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

          <h2 style={{ color: "#FFD700" }}>2. Achats et commandes</h2>
          <p>
            Les achats se font exclusivement via WhatsApp et TikTok. Aucun paiement
            n’est traité directement sur le site. Les commandes sont confirmées
            uniquement par échange direct avec l’équipe Wizza Free Shop.
          </p>

          <h2 style={{ color: "#FFD700" }}>3. Produits proposés</h2>
          <p>
            Wizza Free Shop commercialise uniquement des vêtements et accessoires
            (montres, chapeaux, tenues de fête, etc.). Les descriptions et photos
            des produits sont fournies à titre indicatif et peuvent varier légèrement
            de la réalité.
          </p>

          <h2 style={{ color: "#FFD700" }}>4. Prix et disponibilité</h2>
          <p>
            Les prix affichés sont exprimés en monnaie locale et peuvent évoluer
            selon les promotions ou la disponibilité des stocks. Wizza Free Shop
            se réserve le droit de modifier ses tarifs à tout moment.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Livraison</h2>
          <p>
            Les modalités de livraison (délais, frais, zones couvertes) sont
            communiquées lors de la confirmation de commande. Wizza Free Shop
            s’efforce de respecter les délais annoncés mais ne peut être tenu
            responsable des retards liés à des prestataires externes.
          </p>

          <h2 style={{ color: "#FFD700" }}>6. Retours et échanges</h2>
          <p>
            Les retours ou échanges sont acceptés uniquement si le produit est
            défectueux ou non conforme à la commande. Les demandes doivent être
            formulées dans un délai de 7 jours après réception.
          </p>

          <h2 style={{ color: "#FFD700" }}>7. Utilisation du site</h2>
          <p>
            Les visiteurs s’engagent à utiliser le site de manière loyale et respectueuse.
            Toute tentative de fraude, piratage ou utilisation abusive pourra entraîner
            des poursuites.
          </p>

          <h2 style={{ color: "#FFD700" }}>8. Responsabilité</h2>
          <p>
            Wizza Free Shop n’est pas responsable des problèmes techniques liés à
            WhatsApp ou TikTok. Les utilisateurs sont seuls responsables de leurs
            échanges et de l’utilisation des produits achetés.
          </p>

          <h2 style={{ color: "#FFD700" }}>9. Modification des conditions</h2>
          <p>
            Wizza Free Shop se réserve le droit de modifier ces conditions à tout
            moment. Les visiteurs sont invités à consulter régulièrement cette page.
          </p>

          <h2 style={{ color: "#FFD700" }}>10. Contact</h2>
          <p>
            Pour toute question ou demande, vous pouvez nous joindre via WhatsApp,
            TikTok ou par téléphone. Nous nous engageons à répondre rapidement.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
