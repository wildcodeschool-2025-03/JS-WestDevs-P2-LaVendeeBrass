import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenuPage.css";

interface MenuData {
  id: string;
  category: string;
  imgSrc: string;
}

function MenuPage() {
  const [arrayOfMenus, setArrayOfMenus] = useState<MenuData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/menu")
      .then((response) => response.json())
      .then((data) => setArrayOfMenus(data));
  }, []);

  return (
    <main>
      {arrayOfMenus.map((el) => {
        return (
          <MenuCard key={el.id} imgSrc={el.imgSrc} category={el.category} />
        );
      })}
    </main>
  );
}

export default MenuPage;
