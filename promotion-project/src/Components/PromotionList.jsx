import PromotionItem from "./PromotionItem";

export default function PromotionList({ promotions, onDelete }) {
  return (
    <ul className="list-group">
      {promotions.map((promo) => (
        <PromotionItem
          key={promo._id || promo.tempId || index}
          promo={promo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}



// Éles alkalmazásban index helyett inkább crypto.randomUUID()-t használnék. 
