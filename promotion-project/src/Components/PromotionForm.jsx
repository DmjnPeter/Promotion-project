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
    <form onSubmit={handleSubmit} className="p-4 mb-4">
      <div className="mb-3">
        <label className="form-label">Cím</label>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Cím..."
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Leírás</label>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Leírás..."
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Érvényesség dátuma</label>
        <input
          type="date"
          name="validUntil"
          className="form-control"
          value={form.validUntil}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-danger w-100 mt-4">
        Mentés
      </button>
    </form>
  );
}
