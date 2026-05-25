import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>
          Mentions légales
        </h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Ces mentions légales présentent les informations essentielles concernant
          Wizza Free Shop, afin d’assurer transparence et confiance auprès de nos
          clients.
        </p>

        <section style={{ textAlign: "left", maxWidth: "700px", margin: "40px auto" }}>
          <h2 style={{ color: "#FFD700" }}>1. Éditeur du site</h2>
          <p>
            Le site <strong>Wizza Free Shop</strong> est fondé et dirigé par{" "}
            <strong>Deme Aboubacar</strong>, entrepreneur passionné par la technologie
            et l’innovation digitale, appliquées au commerce en ligne.
          </p>

          <h2 style={{ color: "#FFD700" }}>2. Objet du site</h2>
          <p>
            Wizza Free Shop est une boutique en ligne dédiée à la vente de produits
            variés et accessibles (vêtements, accessoires, montres, chapeaux, etc.),
            avec une expérience d’achat moderne et sécurisée grâce aux outils numériques.
          </p>

          <h2 style={{ color: "#FFD700" }}>3. Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire reconnu, garantissant sécurité
            et disponibilité. Les données techniques sont protégées et conformes aux
            standards internationaux.
          </p>

          <h2 style={{ color: "#FFD700" }}>4. Données personnelles</h2>
          <p>
            Wizza Free Shop ne crée pas de comptes utilisateurs. Les informations
            échangées proviennent uniquement de vos interactions directes avec nous
            (WhatsApp, TikTok, téléphone) et servent exclusivement à finaliser vos
            commandes et assurer un suivi client de qualité.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Responsabilité</h2>
          <p>
            Nous nous engageons à fournir des produits de qualité. Toutefois,
            Wizza Free Shop ne saurait être tenu responsable des problèmes techniques
            liés aux plateformes externes utilisées pour la communication.
          </p>

          <h2 style={{ color: "#FFD700" }}>6. Message du fondateur</h2>
          <p style={{ fontStyle: "italic", color: "#FFD700" }}>
            “Passionné de technologie, j’ai voulu créer une boutique en ligne qui
            allie innovation digitale et accessibilité. Mon ambition est de proposer
            des produits utiles et élégants, tout en offrant une expérience d’achat
            simple, moderne et sécurisée.”  
            <br />— <strong>Deme Aboubacar</strong>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
