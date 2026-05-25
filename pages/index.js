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

      {/* ✅ En-tête professionnelle pour boutique de vêtements */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px", fontSize: "36px" }}>
          Bienvenue sur <span style={{ color: "#fff" }}>Wizza Free Shop</span>
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Découvrez notre collection de vêtements et accessoires élégants pour toutes vos occasions.  
          Que ce soit pour une fête, un événement spécial ou simplement pour affirmer votre style,  
          nous vous proposons des articles de qualité qui allient tendance et confort.
        </p>

        <h2 style={{ color: "#FFD700", marginTop: "40px" }}>🛍️ Derniers Produits</h2>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Explorez nos nouveautés en habits, montres, chapeaux et accessoires.
        </p>
      </div>

      {/* ✅ Grille produits en 2 colonnes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          padding: "20px 40px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#111",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Image produit */}
            <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
              <img
                src={product.image_url}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            {/* Infos produit */}
            <h2 style={{ color: "#fff", marginTop: "10px" }}>{product.name}</h2>
            <p style={{ color: "#FFD700", fontWeight: "bold" }}>
              {product.price} FCFA
            </p>

            {/* ✅ Bouton Voir plus de détail */}
            <a href={`/product/${product.id}`}>
              <button
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
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