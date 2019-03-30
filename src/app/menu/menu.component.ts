import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu, MenuItem } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  vegMenuItems: Array<MenuItem>;
  nonVegMenuItems: Array<MenuItem>;
  selectedItems: Array<MenuItem>;
  isVegSelected: boolean = false;
  messageToSend: string = '#';
  constructor(private menuService: MenuService) { }

  async ngOnInit() {
    this.selectedItems = new Array<MenuItem>();
    const menu: Menu = await this.menuService.getMenu()
    menu.items.forEach(u => u.counter = 0);
    this.vegMenuItems = menu.items.filter(x => x.isVeg);
    this.nonVegMenuItems = menu.items.filter(x => !x.isVeg);
  }

  decreaseCount(item: MenuItem) {
    item.counter = item.counter != 0 ? (item.counter - 1) : 0;
    if (item.counter > 0) {
      if (this.selectedItems.some(x => x.name === item.name)) {
        this.selectedItems.find(x => x.name === item.name).counter = item.counter;
      } else {
        this.selectedItems.push(item);
      }
    } else {
      this.selectedItems.splice(this.selectedItems.findIndex(x => x.name === item.name), 0);
    }
  }

  increaseCount(item: MenuItem) {
    item.counter = item.counter != 5 ? (item.counter + 1) : 5;
    if (item.counter < 5) {
      if (this.selectedItems.some(x => x.name === item.name)) {
        this.selectedItems.find(x => x.name === item.name).counter = item.counter;
      } else {
        this.selectedItems.push(item);
      }
    }
  }

  placeOrder() {
    if (this.selectedItems && this.selectedItems.length) {
      let sum = 0;
      const arrStr = new Array<string>();
      let msg = '';
      this.selectedItems.forEach(z => {
        msg = msg + z.name + ' Qty. ' + z.counter + ', \ ';
        sum = sum + (z.counter * z.priceVal);
      });
      const strToSend = 'Order placed for : \ ' + msg + 'Total Amt. = ₹' + sum;
      this.messageToSend = encodeURI('https://wa.me/918758833454/?text=' + strToSend);
    }
    //https://wa.me/918758833454/?text=heek
  }
}
