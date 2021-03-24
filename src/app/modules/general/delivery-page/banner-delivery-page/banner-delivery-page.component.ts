import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-delivery-page',
  templateUrl: './banner-delivery-page.component.html',
  styleUrls: ['./banner-delivery-page.component.css']
})
export class BannerDeliveryPageComponent implements OnInit {

    title = "McDelivery";

    myimage:string = "assets/images/del.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
