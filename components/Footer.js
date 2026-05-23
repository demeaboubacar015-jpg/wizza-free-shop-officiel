export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li><a href="/legal">Mentions légales</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
        <li><a href="/terms">Conditions d’utilisation</a></li>
      </ul>

      <div className="icons">
        {/* WhatsApp */}
        <a href="https://wa.me/22606895317" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.png" alt="WhatsApp" />
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@Wizzabossboss7" target="_blank" rel="noopener noreferrer">
          <img src="/icons/tiktok.png" alt="TikTok" />
        </a>

        {/* Téléphone */}
        <a href="tel:+22606895317">
          <img src="/icons/phone.png" alt="Téléphone" />
        </a>
      </div>

      <p>© 2026 Wizza Free Shop – Tous droits réservés</p>
    </footer>
  );
}
