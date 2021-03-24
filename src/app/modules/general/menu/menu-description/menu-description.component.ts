import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-description',
  templateUrl: './menu-description.component.html',
  styleUrls: ['./menu-description.component.css']
})


//Aceasta componenta a fost creeata pentru a exersa aplicarea unui Service. Presupunem 
//ca cineva ar vrea sa afiseze doar campul 'name' si 'description' al tuturor meniurilor 
//din acest site. Pentru a nu rescrie cod, am creat o metoda prin care se evita aceasta.

//pentru a functiona trebuie decomentat tag-ul din menu.component.ts

export class MenuDescriptionComponent implements OnInit {

  menu = [] as  any; 

  constructor(private _menuService: MenuService) { } // instanta service

  ngOnInit(): void {
    this.menu = this._menuService.getMenus();  // fetch menus 
  }

}
