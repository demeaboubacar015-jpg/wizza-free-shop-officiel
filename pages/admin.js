import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérification de session au chargement
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        // ⚠️ Redirection si aucun utilisateur n'est connecté
        window.location.href = "/login";
      } else {
        setSession(data.session);
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!session) {
    return null; // redirection déjà faite
  }

  return (
    <div className="admin-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Tableau de Bord Admin</h1>
      <p>Bienvenue {session.user.email}</p>

      <button
        onClick={() => supabase.auth.signOut().then(() => (window.location.href = "/login"))}
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          padding: "5px 10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Se déconnecter
      </button>

      {/* Ici tu gardes ton formulaire d’ajout de produit et la liste */}
      {/* ... ton code ProductForm et liste des produits ... */}
    </div>
  );
}
