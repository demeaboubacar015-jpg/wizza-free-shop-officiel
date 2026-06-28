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
            WhatsApp, TikTok ou téléphone (nom, numéro, profil).
          </p>

          <h2 style={{ color: "#FFD700" }}>2. Utilisation des données</h2>
          <p>
            Vos informations sont utilisées uniquement pour traiter vos commandes,
            assurer la livraison et communiquer avec vous. Elles ne sont jamais
            revendues ni partagées avec des tiers à des fins commerciales.
          </p>

          <h2 style={{ color: "#FFD700" }}>3. Partage avec prestataires</h2>
          <p>
            Certaines données (nom, adresse, numéro de téléphone) peuvent être
            transmises aux transporteurs ou partenaires logistiques afin d’assurer
            la livraison de vos produits.
          </p>

          <h2 style={{ color: "#FFD700" }}>4. Conservation</h2>
          <p>
            Les données échangées sont conservées uniquement le temps nécessaire
            pour finaliser votre commande et assurer le suivi client. Les données
            liées aux factures peuvent être conservées conformément aux obligations
            légales et fiscales.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Sécurité</h2>
          <p>
            Nous utilisons les plateformes officielles (WhatsApp, TikTok) pour
            garantir la sécurité de vos échanges. Wizza Free Shop ne stocke pas
            vos données sensibles sur son site.
          </p>

          <h2 style={{ color: "#FFD700" }}>6. Cookies</h2>
          <p>
            Notre site peut utiliser des cookies techniques pour améliorer la
            navigation. Aucun cookie publicitaire ou de suivi n’est installé.
          </p>

          <h2 style={{ color: "#FFD700" }}>7. Consentement</h2>
          <p>
            En utilisant notre site et en passant commande, vous acceptez cette
            politique de confidentialité.
          </p>

          <h2 style={{ color: "#FFD700" }}>8. Mineurs</h2>
          <p>
            Wizza Free Shop ne cible pas les mineurs. Les achats doivent être
            réalisés par des adultes ou sous la responsabilité d’un représentant
            légal.
          </p>

          <h2 style={{ color: "#FFD700" }}>9. Vos droits</h2>
          <p>
            Conformément au RGPD et au CCPA, vous disposez d’un droit d’accès,
            de rectification et de suppression de vos données personnelles.
            Vous pouvez exercer ces droits en nous contactant directement via
            WhatsApp, TikTok ou téléphone.
          </p>

          <h2 style={{ color: "#FFD700" }}>10. Contact</h2>
          <p>
            Pour toute question relative à vos données personnelles, vous pouvez
            nous joindre via WhatsApp, TikTok ou par téléphone. Nous nous engageons
            à répondre rapidement.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
