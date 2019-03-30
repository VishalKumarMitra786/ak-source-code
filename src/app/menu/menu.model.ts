export class MenuItem {
  name: string;
  price: string;
  isBestSeller: boolean;
  isVeg: boolean;
  counter: number = 0;
  priceVal: number;
}

export class Menu {
  items: Array<MenuItem>;
}

