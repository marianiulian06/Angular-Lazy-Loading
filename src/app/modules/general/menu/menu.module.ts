import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuDescriptionComponent } from './menu-description/menu-description.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { MenuListBannerComponent } from './menu-list/menu-list-banner/menu-list-banner.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuDescriptionComponent,
    MenuListComponent,
    MenuListBannerComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    HttpClientModule
    
  ],

  providers: [MenuService],
})
export class MenuModule { }
