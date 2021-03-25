import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-careers',
  templateUrl: './banner-careers.component.html',
  styleUrls: ['./banner-careers.component.css']
})
export class BannerCareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage: string = "assets/images"
  title = "Alătură-te echipei noastre!";
}
