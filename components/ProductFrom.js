import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ProductForm({ onProductAdded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = null;

    // Upload image dans Supabase Storage
    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("products") // ⚠️ ton bucket doit s’appeler "products"
        .upload(fileName, imageFile);

      if (uploadError) {
        console.error("Erreur upload image:", uploadError.message);
        alert("Erreur upload image: " + uploadError.message);
        return;
      }

      // Récupérer l’URL publique
      const { data: publicUrl } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // Insérer le produit dans la table (colonne "image")
    const { error } = await supabase.from("products").insert([
      {
        title,
        price,
        description,
        image: imageUrl, // ✅ correspond à ta colonne
      },
    ]);

    if (error) {
      console.error("Erreur ajout produit:", error.message);
      alert("Erreur ajout produit: " + error.message);
    } else {
      alert("Produit ajouté !");
      setTitle("");
      setPrice("");
      setDescription("");
      setImageFile(null);
      if (onProductAdded) onProductAdded();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] p-4 rounded-lg shadow-md text-white"
    >
      <h2 className="text-lg font-bold mb-4">Ajouter un produit</h2>

      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-black text-white"
        required
      />

      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-black text-white"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-black text-white"
        required
      />

      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="w-full p-2 mb-2 rounded bg-black text-white"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400"
      >
        Publier
      </button>
    </form>
  );
}
