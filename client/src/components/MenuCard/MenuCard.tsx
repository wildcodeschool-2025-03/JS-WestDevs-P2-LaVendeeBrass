import "./MenuCard.css";
import { useState } from "react";
import type { MenuItem, PageMenuProps } from "./MenuTypes";

function MenuCard({ page }: PageMenuProps) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const toggleExtension = () => {
    setIsExtended(!isExtended);
  };

  const uniqueCategoryItems: MenuItem[] = page.menu.reduce(
    (accumulator: MenuItem[], current: MenuItem) => {
      if (!accumulator.find((item) => item.category === current.category)) {
        accumulator.push(current);
      }
      return accumulator;
    },
    [],
  );

  return (
    <button
      type="button"
      className={`menu-card${isExtended ? " extended" : ""}`}
      onClick={toggleExtension}
    >
      <img src={page.imgSrc} alt={page.category} />
      {!isExtended ? (
        <figcaption>{page.category}</figcaption>
      ) : (
        <article>
          <h2>{page.category}</h2>
          <div className={`menu-list-container ${page.category.toLowerCase()}`}>
            {uniqueCategoryItems.map((item) => (
              <section key={item.category}>
                {item.category && <h3>{item.category}</h3>}
                <ul>
                  {page.menu
                    .filter((product) => product.category === item.category)
                    .map((product) => (
                      <li key={product.id}>
                        <h4>{product.name}</h4>
                        <p className="price">{product.price} €</p>
                        {product.ingredients && (
                          <p className="product-details">
                            {product.ingredients}
                          </p>
                        )}
                        {product.castle && (
                          <p className="product-details">{product.castle}</p>
                        )}
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      )}
    </button>
  );
}

export default MenuCard;
