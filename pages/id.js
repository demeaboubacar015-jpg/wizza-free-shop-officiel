import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// ✅ Import correct : fichier lib/supabase.js doit exister
import { supabase } from "../lib/supabase";
// ✅ Import correct : fichier Navbar.js dans components/
import Navbar from "../components/Navbar";
// ✅ Import correct : fichier Footer.js dans components/
import Footer from "../components/Footer";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Erreur chargement produit:", error.message);
      } else {
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Chargement du produit...</p>;

  return (
    <div className="product-detail">
      <Navbar />
      <h1>{product.title}</h1>
      <div className="product-container">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <p className="price">{product.price} FCFA</p>
          <p>{product.description}</p>
          <div className="contact-buttons">
            <a href="https://wa.me/226XXXXXXXX" className="btn">WhatsApp</a>
            <a href="https://www.tiktok.com/@WizzaFreeShop" className="btn">TikTok</a>
            <a href="tel:+226XXXXXXXX" className="btn">Téléphone</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

