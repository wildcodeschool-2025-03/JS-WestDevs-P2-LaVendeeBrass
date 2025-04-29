export interface MenuItem {
  category: string;
  name: string;
  ingredients?: string;
  castle?: string;
  price: number;
  id: string;
}

export interface PageMenuProps {
  page: {
    category: string;
    imgSrc: string;
    menu: MenuItem[];
  };
}
