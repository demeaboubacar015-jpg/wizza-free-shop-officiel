import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [products, setProducts] = useState([]);

  // Charger les produits existants
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Erreur chargement produits:", error.message);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  // Sélection fichier image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Ajouter un produit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = null;

    if (imageFile) {
      // Upload vers Supabase Storage (bucket "products")
      const { data, error } = await supabase.storage
        .from("products")
        .upload(`images/${Date.now()}-${imageFile.name}`, imageFile);

      if (error) {
        alert("Erreur upload image : " + error.message);
        return;
      }

      // Récupérer l’URL publique
      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(data.path);

      imageUrl = publicUrlData.publicUrl;
    }

    // Insérer dans la base
    const { error: dbError } = await supabase.from("products").insert([
      {
        title,
        price,
        description,
        image_url: imageUrl,
      },
    ]);

    if (dbError) {
      alert("Erreur ajout produit : " + dbError.message);
    } else {
      alert("Produit ajouté avec succès !");
      setTitle("");
      setPrice("");
      setDescription("");
      setImageFile(null);

      // Recharger la liste
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    }
  };

  // Supprimer un produit
  const handleDelete = async (id) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert("Erreur suppression produit : " + error.message);
    } else {
      alert("Produit supprimé !");
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="admin-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Section ajout produit */}
      <h1>Ajouter un produit</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Titre du produit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Champ fichier pour uploader une image */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit">Publier le produit</button>
      </form>

      {/* Section gestion des stocks */}
      <h2>Liste des produits</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "15px" }}>
              <strong>{product.title}</strong> - {product.price} €
              <br />
              <img
                src={product.image_url}
                alt={product.title}
                style={{ width: "120px", marginTop: "5px" }}
              />
              <br />
              <button
                onClick={() => handleDelete(product.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit disponible pour le moment.</p>
      )}
    </div>
  );
}
