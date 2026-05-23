import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [products, setProducts] = useState([]);

  // Vérification de session
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
        fetchProducts();
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  // Connexion
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSession(data.session);
      fetchProducts();
    }
  };

  // Déconnexion
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProducts([]);
  };

  // Charger les produits
  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Erreur chargement produits:", error.message);
    } else {
      setProducts(data);
    }
  };

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
      const fileName = `images/${Date.now()}-${imageFile.name}`;
      const { data, error } = await supabase.storage
        .from("products")
        .upload(fileName, imageFile);

      if (error) {
        alert("Erreur upload image : " + error.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    const { error: dbError } = await supabase.from("products").insert([
      {
        title,
        price,
        description,
        image: imageUrl,      // ✅ stocke dans colonne image
        image_url: imageUrl,  // ✅ stocke aussi dans colonne image_url
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
      fetchProducts();
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

  if (loading) return <p>Chargement...</p>;

  // Si pas connecté → formulaire login
  if (!session) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Connexion Admin</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Se connecter</button>
        </form>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </div>
    );
  }

  // Si connecté → tableau de bord
  return (
    <div className="admin-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Tableau de Bord Admin</h1>
      <p>Bienvenue {session.user.email}</p>
      <button onClick={handleLogout}>Se déconnecter</button>

      {/* Section ajout produit */}
      <h2>Ajouter un produit</h2>
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
              {(product.image || product.image_url) && (
                <img
                  src={product.image || product.image_url}
                  alt={product.title}
                  style={{ width: "120px", marginTop: "5px" }}
                />
              )}
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
