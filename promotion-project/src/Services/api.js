const BASE_URL = "https://crudcrud.com/api/292fd714cabd4bbcb2a3b12ed14cac60/promotions";

export async function fetchPromotions() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Hiba történt a promóciók lekérésekor");
  return res.json();
}

export async function addPromotion(promo) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(promo)
  });
  if (!res.ok) throw new Error("Hiba történt mentéskor");
  return res.json(); // fontos, hogy visszaadd az új objektumot
}

export async function deletePromotion(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Hiba történt törléskor");
}
