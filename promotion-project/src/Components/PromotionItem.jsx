// PromotionItem.jsx
export default function PromotionItem({ promo, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5 className="mb-1">{promo.title}</h5>
        <p className="mb-1 " style={{color: '#f5c518cc'}}>{promo.description}</p>
        <small>Érvényes: {promo.validUntil}</small>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => promo._id && onDelete(promo._id)}
      >
        Törlés
      </button>
    </li>
  );
}
