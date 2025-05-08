import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenuPage.css";
import { AnimatePresence, motion } from "motion/react";
import MenuSideBard from "../../components/MenuSideBar/MenuSideBar";
import type { MenuData } from "./MenuTypes";

function MenuPage() {
  const [arrayOfMenus, setArrayOfMenus] = useState<MenuData[]>([]);
  const [someCardOpenned, setSomeCardOpenned] = useState(false);
  const [visibleMenus, setVisibleMenus] = useState<MenuData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/menu")
      .then((response) => response.json())
      .then((data) => {
        setVisibleMenus(data);
        setArrayOfMenus(data);
      });
  }, []);

  return (
    <main className="menu-page">
      <h1>LE MENU</h1>
      <div className="menu-container">
        <AnimatePresence>
          {someCardOpenned && (
            <MenuSideBard
              arrayOfMenus={arrayOfMenus}
              setVisibleMenus={setVisibleMenus}
            />
          )}
        </AnimatePresence>
        <motion.section className="menu-list">
          {visibleMenus.map((page) => {
            return (
              <MenuCard
                key={page.id}
                page={page}
                states={{
                  arrayOfMenus,
                  setVisibleMenus,
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
