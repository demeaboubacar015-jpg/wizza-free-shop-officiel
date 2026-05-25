import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

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

      if (!error) {
        console.log("Produit récupéré :", data);
        setProduct(data);
      } else {
        console.error("Erreur Supabase :", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ padding: "60px 20px", textAlign: "center" }}>
          <h1 style={{ color: "#FFD700" }}>Chargement du produit...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  // ✅ Nom du produit
  const productName = product.name || product.title || "Produit";

  // ✅ Message pré-rempli WhatsApp
  const whatsappMessage = `Bonjour 👋,

Je souhaite commander le produit suivant :

📦 Nom : ${productName}
💰 Prix : ${product.price} FCFA
📐 Dimension : ${product.dimension || "Non spécifiée"}

Merci de me confirmer la disponibilité et les modalités de livraison 🙏

— Client Wizza Free Shop`;

  const whatsappLink = `https://wa.me/22606895317?text=${encodeURIComponent(whatsappMessage)}`;

  // ✅ Lien TikTok (remplace par ton vrai profil)
  const tiktokLink = "https://www.tiktok.com/@tonprofil";

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        {/* ✅ Nom du produit */}
        <h1 style={{ color: "#FFD700", marginBottom: "20px" }}>
          {productName}
        </h1>

        {/* ✅ Image */}
        <div style={{ width: "100%", maxWidth: "600px", margin: "auto", height: "350px", overflow: "hidden" }}>
          <img
            src={product.image_url}
            alt={productName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* ✅ Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", maxWidth: "700px", margin: "20px auto" }}>
          {product.description || "Aucune description disponible pour ce produit."}
        </p>

        {/* ✅ Dimension */}
        {product.dimension && (
          <p style={{ fontSize: "16px", color: "#fff", marginTop: "10px" }}>
            Dimension : <span style={{ color: "#FFD700" }}>{product.dimension}</span>
          </p>
        )}

        {/* ✅ Prix */}
        <h2 style={{ color: "#FFD700", marginTop: "20px" }}>
          {product.price} FCFA
        </h2>

        {/* ✅ Boutons WhatsApp + TikTok côte à côte */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {/* Bouton WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" width="22" height="22" />
              Commander via WhatsApp
            </button>
          </a>

          {/* Bouton TikTok */}
          <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "2px solid #FFD700",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <img src="/icons/tiktok.png" alt="TikTok" width="22" height="22" />
              Voir sur TikTok
            </button>
          </a>
        </div>

        {/* ✅ Bouton retour */}
        <div style={{ marginTop: "30px" }}>
          <a href="/products">
            <button className="btn-details">
              ← Retour aux Produits
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
