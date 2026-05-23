import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";

export default function Feed() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading products:", error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400 text-center p-10">
        Loading products...
      </p>
    );
  }

  if (!products || products.length === 0) {
    return (
      <p className="text-gray-400 text-center p-10">
        No products available yet.
      </p>
    );
  }

  return (
    <div className="feed">
      <h1 className="text-xl font-bold text-white mb-2">Latest Products</h1>
      <p className="text-gray-300 mb-4">
        Discover the newest items published on Wizza Free Shop.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4 bg-black">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
