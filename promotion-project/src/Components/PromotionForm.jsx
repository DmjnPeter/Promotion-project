import { useState } from "react";

export default function PromotionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    validUntil: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    setForm({ title: "", description: "", validUntil: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="promo-form">
      <input name="title" placeholder="Cím" onChange={handleChange} value={form.title} required />
      <input name="description" placeholder="Leírás"  onChange={handleChange} value={form.description} required />
      <input name="validUntil" type="date" onChange={handleChange} value={form.validUntil}  required />
      <button type="submit">Mentés</button>
    </form>
  );
}
