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
            et l’innovation digitale.
          </p>

          <h2 style={{ color: "#FFD700" }}>2. Objet du site</h2>
          <p>
            Wizza Free Shop est une boutique en ligne dédiée à la vente de produits
            numériques et physiques (vêtements, accessoires, etc.),
            avec une expérience d’achat moderne et sécurisée.
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
          <p>
            Conformément au RGPD et au CCPA, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données personnelles. Pour exercer
            ces droits, contactez-nous via les canaux indiqués ci-dessous.
          </p>

          <h2 style={{ color: "#FFD700" }}>5. Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur le site (textes, images, logos,
            produits numériques) sont protégés par le droit d’auteur. Toute
            reproduction ou utilisation non autorisée est strictement interdite.
          </p>

          <h2 style={{ color: "#FFD700" }}>6. Conditions générales d’utilisation</h2>
          <p>
            L’accès et l’utilisation du site impliquent l’acceptation des présentes
            mentions légales. Toute utilisation frauduleuse ou abusive pourra donner
            lieu à des poursuites.
          </p>

          <h2 style={{ color: "#FFD700" }}>7. Responsabilité</h2>
          <p>
            Nous nous engageons à fournir des produits de qualité. Toutefois,
            Wizza Free Shop ne saurait être tenu responsable des problèmes techniques
            liés aux plateformes externes utilisées pour la communication.
          </p>

          <h2 style={{ color: "#FFD700" }}>8. Contact</h2>
          <p>
            Pour toute question ou demande, vous pouvez nous joindre via WhatsApp,
            TikTok ou par téléphone. Nous nous engageons à répondre dans les plus
            brefs délais.
          </p>

          <h2 style={{ color: "#FFD700" }}>9. Message du fondateur</h2>
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
