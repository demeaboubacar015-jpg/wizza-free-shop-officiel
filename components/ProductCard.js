import Link from "next/link";

export default function ProductCard({ product }) {
  const whatsappLink = `https://wa.me/22602680798?text=Bonjour, je souhaite commander le produit: ${product.name}`;

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.price} FCFA</p>

      {/* Bouton Voir détails */}
      <Link href={`/product/${product.id}`}>
        <button className="btn-details">
          <img src="/icons/eye.png" alt="Voir détails" width="18" height="18" />
          Voir détails
        </button>
      </Link>

      {/* Bouton WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="btn-whatsapp">
          <img src="/icons/whatsapp.png" alt="WhatsApp" width="20" height="20" />
          Commander via WhatsApp
        </button>
      </a>
    </div>
  );
}
