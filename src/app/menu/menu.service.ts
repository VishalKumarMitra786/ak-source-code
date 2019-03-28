import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenu() {
    return this.httpClient.get('./menu.json').toPromise().then(result => {
      return <Menu>result;
    });
  }
}
