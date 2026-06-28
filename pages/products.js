import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false }); // tri par date, dernier produit en premier
      if (!error) setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>Nos Produits</h1>
        <p style={{ maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
          Découvrez tous les articles disponibles sur Wizza Free Shop.
        </p>
      </div>

      {/* Grille en 2 colonnes */}
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
                }}
              />
            </div>

            {/* Infos produit */}
            <h2 style={{ color: "#fff", marginTop: "10px" }}>{product.name}</h2>
            <p style={{ color: "#FFD700", fontWeight: "bold" }}>
              {product.price} FCFA
            </p>

            {/* Bouton Voir détails */}
            <Link href={`/product/${product.id}`}>
              <button className="btn-details">
                <img
                  src="/icons/eye.png"
                  alt="Voir détails"
                  width="18"
                  height="18"
                />
                Voir détails
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
