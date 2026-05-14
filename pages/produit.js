import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Produit() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur chargement produits:", error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="produit">
      <Navbar />
      <h1>Nos Produits</h1>
      <p>Découvrez tous les articles disponibles sur Wizza Free Shop.</p>

      <div className="produit-grid">
        {products.length === 0 ? (
          <p>Aucun produit disponible pour le moment.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="produit-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p className="price">{product.price} FCFA</p>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
