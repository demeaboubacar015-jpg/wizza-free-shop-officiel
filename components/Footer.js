export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Wizza Free Shop. Tous droits réservés.</p>
        <p>Basé à Ouagadougou, Burkina Faso</p>
        <p>
          <a href="/contact">Contact</a> | <a href="/localisation">Localisation</a> | 
          <a href="/mentions-legales">Mentions légales</a>
        </p>
      </div>
    </footer>
  );
}
