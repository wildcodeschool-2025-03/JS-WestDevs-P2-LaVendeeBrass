export interface MenuItem {
  category: string;
  name: string;
  ingredients?: string;
  castle?: string;
  price: number;
  id: string;
}

export interface MenuCardsProps {
  page: {
    id: string;
    category: string;
    icon: string;
    imgSrc: string;
    menu: MenuItem[];
  };
  states: {
    arrayOfMenus: MenuData[];
    setVisibleMenus: (data: MenuData[]) => void;
    someCardOpenned: boolean;
    setSomeCardOpenned: (status: boolean) => void;
  };
}

export interface MenuData {
  id: string;
  category: string;
  icon: string;
  imgSrc: string;
  menu: MenuItem[];
}

export interface MenuSideBarProps {
  arrayOfMenus: MenuData[];
  setVisibleMenus: (data: MenuData[]) => void;
}
