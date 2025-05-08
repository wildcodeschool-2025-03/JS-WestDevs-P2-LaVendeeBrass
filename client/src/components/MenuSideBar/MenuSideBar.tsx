import "./MenuSideBard.css";
import { motion } from "motion/react";
import type { MenuSideBarProps } from "../../pages/MenuPage/MenuTypes";

function MenuSideBard({ arrayOfMenus, setVisibleMenus }: MenuSideBarProps) {
  return (
    <motion.ul
      className="menu-sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ scale: 0, y: -50 }}
    >
      {arrayOfMenus.map((page) => {
        return (
          <li key={page.id}>
            <button type="button" onClick={() => setVisibleMenus([page])}>
              <img src={page.icon} alt={page.category} />
              <span>{page.category}</span>
            </button>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default MenuSideBard;
