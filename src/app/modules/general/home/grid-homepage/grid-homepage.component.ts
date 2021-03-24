import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-homepage',
  templateUrl: './grid-homepage.component.html',
  styleUrls: ['./grid-homepage.component.css']
})
export class GridHomepageComponent implements OnInit {


  
  titleMcDelivery = "McDelivery™";
  description_titleMcDelivery = "Îți livrăm când jobul s-a mutat acasa. ";

  titleInstallApp = "Instalează aplicația";
  description_titleInstallApp = "Ai oferte pe gustul tău, exclusiv în app!";

  myimage: string = "assets/images/mcoferta.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
