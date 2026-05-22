export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Wizza Free Shop</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-gold">Accueil</a>
        <a href="/produits" className="hover:text-gold">Produits</a>
        <a href="/contact" className="hover:text-gold">Contact</a>
        <a href="/mentions-legales" className="hover:text-gold">Mentions légales</a>
        <a href="/localisation" className="hover:text-gold">Localisation</a>
      </div>
    </nav>
  );
}
