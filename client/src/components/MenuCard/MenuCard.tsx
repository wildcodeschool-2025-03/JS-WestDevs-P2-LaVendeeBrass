import "./MenuCard.css";
import { motion } from "motion/react";
import type { MenuCardsProps, MenuItem } from "../../pages/MenuPage/MenuTypes";

function MenuCard({ page, states }: MenuCardsProps) {
  const toggleExtension = () => {
    if (!states.someCardOpenned) {
      states.setVisibleMenus([page]);
      window.scrollTo({
        top: 90,
        behavior: "smooth",
      });
    } else {
      states.setVisibleMenus(states.fixData.current);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    states.setSomeCardOpenned(!states.someCardOpenned);
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

  const CardsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    layout: { transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={CardsVariants}
      transition={{ layout: { duration: 0.5 } }}
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`menu-card${states.someCardOpenned ? " extended" : ""}`}
      onClick={toggleExtension}
      whileHover={
        !states.someCardOpenned
          ? {
              z: 8,
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      <img src={page.imgSrc} alt={page.category} />
      <figcaption>{page.category}</figcaption>
      {states.someCardOpenned && (
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
