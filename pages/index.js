import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (!error) setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* ✅ En-tête professionnelle */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>
          Bienvenue sur <span style={{ color: "#fff" }}>Wizza Free Shop</span>
        </h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Découvrez notre collection de vêtements et accessoires élégants pour toutes vos occasions.  
          Que ce soit pour une fête, un événement spécial ou simplement pour affirmer votre style,  
          nous vous proposons des articles de qualité qui allient tendance et confort.
        </p>

        <h2 style={{ marginTop: "40px" }}>🛍️ Derniers Produits</h2>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Explorez nos nouveautés en habits, montres, chapeaux et accessoires.
        </p>
      </div>

      {/* ✅ Grille produits */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            
            {/* ✅ Image carrée parfaite (utilise image_url ou image) */}
            {(product.image_url || product.image) && (
              <img
                src={product.image_url || product.image}
                alt={product.title}
                className="votre-image-produit"
              />
            )}

            {/* Infos produit */}
            <h2>{product.title}</h2>
            <p style={{ color: "#FFD700", fontWeight: "bold" }}>
              {product.price} FCFA
            </p>

            {/* ✅ Bouton Voir plus de détail */}
            <a href={`/product/${product.id}`}>
              <button className="btn-details">
                <img src="/icons/voirplus.png" alt="Voir plus de détail" width="20" height="20" />
                Voir plus de détail
              </button>
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
