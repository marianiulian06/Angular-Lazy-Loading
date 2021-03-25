import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { BannerCareersComponent } from './banner-careers/banner-careers.component';
import { CareersComponent } from './careers.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CareersComponent,
    BannerCareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CareersModule { }
