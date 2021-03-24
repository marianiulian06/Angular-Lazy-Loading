import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  //for reusable component
  offers = [
    {
    name: 'Hashbrown',
    price: 5,
    description:'nCartof proaspăt și cald, moale în interior și învelit într-un strat crocant în exterior.oida'
  },
  {
    name: 'Cappy Multivitamin 180ml',
    price: 2,
    description:'Combinația perfectă dintre suc de fructe și vitamine într-o băutură răcoritoare. '
  },
  {
    name: 'Lipton 250ml',
    price: 2,
    description:'Produs obţinut doar din concentrate naturale, servit cu gheaţă'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
