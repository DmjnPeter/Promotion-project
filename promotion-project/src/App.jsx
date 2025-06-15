
import { useEffect, useState } from "react";
import { fetchPromotions, addPromotion, deletePromotion } from "./Services/api.js";
import PromotionForm from "./Components/PromotionForm.jsx";
import PromotionList from "./Components/PromotionList.jsx";

function App() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPromotions();
  }, []);

  async function loadPromotions() {
    try {
      setLoading(true);
      const data = await fetchPromotions();
      setPromotions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(promo) {
    try {
      const newPromo = await addPromotion(promo);
      setPromotions((prev) => [...prev, newPromo]);
    } catch (err) {
      alert("Nem sikerült hozzáadni.");
    }
  }

  async function handleDelete(id) {
    try {
      await deletePromotion(id);
      setPromotions((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Nem sikerült törölni.");
    }
  }

  return (
  <div className="container py-5">
    <h1 className="mb-4">Promóciók</h1>
    <PromotionForm onAdd={handleAdd} />
    {loading ? (
      <div className="alert alert-info text-dark">Betöltés...</div>
    ) : error ? (
      <div className="alert alert-danger text-dark">{error}</div>
    ) : (
      <PromotionList promotions={promotions} onDelete={handleDelete} />
    )}
  </div>
);

}

export default App;

