export default function PromotionItem({ promo, onDelete }) {
  return (
    <li className="promo-item">
      <h3>{promo.title}</h3>
      <p>{promo.description}</p>
      <small>Érvényes: {promo.validUntil}</small>
      <button onClick={() => promo._id && onDelete(promo._id)}>Törlés</button>
    </li>
  );
}
