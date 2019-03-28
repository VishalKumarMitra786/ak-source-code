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
  isVegSelected: boolean = false;
  constructor(private menuService: MenuService) { }

  async ngOnInit() {
    const menu: Menu = await this.menuService.getMenu()
    this.vegMenuItems = menu.items.filter(x => x.isVeg);
    this.nonVegMenuItems = menu.items.filter(x => !x.isVeg);
  }

}
