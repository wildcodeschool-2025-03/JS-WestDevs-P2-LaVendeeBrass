import { useEffect, useRef, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenuPage.css";
import { motion } from "motion/react";
import MenuSideBard from "../../components/MenuSideBar/MenuSideBar";
import type { MenuData } from "./MenuTypes";

function MenuPage() {
  const fixData = useRef([]);
  const [someCardOpenned, setSomeCardOpenned] = useState(false);
  const [visibleMenus, setVisibleMenus] = useState<MenuData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/menu")
      .then((response) => response.json())
      .then((data) => {
        setVisibleMenus(data);
        fixData.current = data;
        console.log(fixData);
      });
  }, []);

  return (
    <main className="menu-page">
      <h1>LE MENU</h1>
      <div className="menu-container">
        <motion.section className="menu-list">
          {someCardOpenned && (
            <MenuSideBard
              arrayOfMenus={fixData.current}
              setVisibleMenus={setVisibleMenus}
            />
          )}
          {visibleMenus.map((page) => {
            return (
              <MenuCard
                key={page.id}
                page={page}
                states={{
                  fixData,
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
