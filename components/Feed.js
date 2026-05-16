import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import productCard from "./productCard";

export default function Feed() {
  // Définition du state products
  const [products, setProducts] = useState([]);

  // Chargement des produits depuis Supabase
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
    <div className="feed">
      <h1 className="text-xl font-bold text-white mb-2">Fil d’actualité</h1>
      <p className="text-gray-300 mb-4">
        Découvrez les derniers produits publiés sur Wizza Free Shop.
      </p>

      {/* Grille en 2 colonnes */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-black">
        {products.length === 0 ? (
          <p className="text-gray-400">Aucun produit disponible pour le moment.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
