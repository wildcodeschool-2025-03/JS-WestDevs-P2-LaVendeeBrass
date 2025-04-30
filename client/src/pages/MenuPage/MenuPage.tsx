import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenuPage.css";

interface MenuData {
  id: string;
  category: string;
  imgSrc: string;
  menu: [];
}

function MenuPage() {
  const [arrayOfMenus, setArrayOfMenus] = useState<MenuData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/menu")
      .then((response) => response.json())
      .then((data) => setArrayOfMenus(data));
  }, []);

  return (
    <main className="menu-page">
      <h1>LE MENU</h1>
      <section className="menu-list">
        {arrayOfMenus.map((page) => {
          return <MenuCard key={page.id} page={page} />;
        })}
      </section>
    </main>
  );
}

export default MenuPage;
