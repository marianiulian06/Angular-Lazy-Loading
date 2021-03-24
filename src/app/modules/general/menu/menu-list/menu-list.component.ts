import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

   menu = [] as  any; 
  constructor(private _menuService: MenuService) { //  instanta service

  }

  ngOnInit(): void {
    this.menu = this._menuService.getMenus(); //  fetch data
  }

  myimage: string = "assets/images/McDonalds.png";

 

}


