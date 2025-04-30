import "./MenuCard.css";
import { motion } from "motion/react";
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
    <motion.div
      transition={{ layout: { duration: 0.5 } }}
      layout
      className={`menu-card${isExtended ? " extended" : ""}`}
      onClick={toggleExtension}
      whileHover={
        !isExtended
          ? {
              z: 8,
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      <img src={page.imgSrc} alt={page.category} />
      <figcaption>{page.category}</figcaption>
      {isExtended && (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
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
        </motion.article>
      )}
    </motion.div>
  );
}

export default MenuCard;
