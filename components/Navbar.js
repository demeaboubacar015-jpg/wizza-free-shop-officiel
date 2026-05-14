import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Wizza Free Shop</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/produit">Produits</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/localisation">Localisation</Link>
        </li>
      </ul>
    </nav>
  );
}
