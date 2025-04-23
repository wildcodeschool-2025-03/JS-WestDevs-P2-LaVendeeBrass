import "./MenuCard.css";

interface MenuProps {
  category: string;
  imgSrc: string;
}

function MenuCard({ category, imgSrc }: MenuProps) {
  return (
    <figure className="menu-card">
      <img src={imgSrc} alt={category} />
      <figcaption>{category}</figcaption>
    </figure>
  );
}

export default MenuCard;
