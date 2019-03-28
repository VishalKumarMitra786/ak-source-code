export class MenuItem {
  name: string;
  price: string;
  isBestSeller: boolean;
  isVeg: boolean;
}

export class Menu {
  items: Array<MenuItem>;
}

