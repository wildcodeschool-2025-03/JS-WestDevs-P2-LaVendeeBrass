import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenuPage.css";
import { motion } from "motion/react";
import MenuSideBard from "../../components/MenuSideBar/MenuSideBar";
import type { MenuData } from "./MenuTypes";

function MenuPage() {
  const [visibleCardCategory, setVisibleCardCategory] = useState("");
  const [arrayOfMenus, setArrayOfMenus] = useState<MenuData[]>([]);
  const [someCardOpenned, setSomeCardOpenned] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3310/menu")
      .then((response) => response.json())
      .then((data) => {
        setArrayOfMenus(data);
      });
  }, []);

  return (
    <main className="menu-page">
      <h1>LE MENU</h1>
      <div className="menu-container">
        <motion.section className="menu-list">
          {someCardOpenned && (
            <MenuSideBard
              arrayOfMenus={arrayOfMenus}
              setVisibleCardCategory={setVisibleCardCategory}
            />
          )}
          {arrayOfMenus
            .filter((page) => page.category.includes(visibleCardCategory))
            .map((page) => {
              return (
                <MenuCard
                  key={page.id}
                  page={page}
                  states={{
                    setVisibleCardCategory,
                    someCardOpenned,
                    setSomeCardOpenned,
                  }}
                />
              );
            })}
        </motion.section>
      </div>
    </main>
  );
}

export default MenuPage;
