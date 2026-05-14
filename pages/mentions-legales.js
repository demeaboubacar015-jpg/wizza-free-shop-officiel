import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="mentions-legales">
      <Navbar />
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          Wizza Free Shop – Boutique digitale basée à Ouagadougou, Burkina Faso.
          Contact : <a href="mailto:demeaboubacar015@gmail.com">demeaboubacar015@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Les informations publiées sur ce site sont fournies à titre indicatif.
          Wizza Free Shop ne saurait être tenu responsable des erreurs ou omissions.
        </p>
      </section>

      <section>
        <h2>Protection des données</h2>
        <p>
          Conformément au RGPD (UE), CCPA (Californie) et aux standards
          internationaux, vos données personnelles ne sont utilisées que pour
          la gestion des commandes et la communication avec les clients.
        </p>
        <p>
          Vous pouvez demander la suppression de vos données en nous contactant
          à l’adresse : <a href="mailto:demeaboubacar015@gmail.com">demeaboubacar015@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus (images, vidéos, textes, produits numériques) sont
          protégés par le droit d’auteur. Toute reproduction non autorisée est
          interdite.
        </p>
      </section>

      <Footer />
    </div>
  );
}
