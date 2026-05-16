import { supabase } from "../../../lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Récupérer tous les produits
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur GET:", error.message);
      return res.status(500).json({ error: "Erreur serveur" });
    }

    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    // Ajouter un nouveau produit
    const { title, price, description, image } = req.body;

    if (!title || !price || !description || !image) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    const { data, error } = await supabase
      .from("products")
      .insert([{ title, price, description, image }]);

    if (error) {
      console.error("Erreur POST:", error.message);
      return res.status(500).json({ error: "Erreur serveur" });
    }

    return res.status(201).json(data);
  }

  return res.status(405).json({ error: "Méthode non autorisée" });
}
