import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryPageRoutingModule } from './delivery-page-routing.module';
import { DeliveryPageComponent } from './delivery-page.component';
import { BannerDeliveryPageComponent } from './banner-delivery-page/banner-delivery-page.component';


@NgModule({
  declarations: [
    DeliveryPageComponent, 
    BannerDeliveryPageComponent],
  imports: [
    CommonModule,
    DeliveryPageRoutingModule
  ]
})
export class DeliveryPageModule { }
