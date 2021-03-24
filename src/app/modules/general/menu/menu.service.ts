import { Injectable } from '@angular/core';

@Injectable()

export class MenuService {

  constructor() { }

  ///////metoda care returneaza meniurile //////////
  getMenus() {
    return [
      {
        "id":1,
        "name":"McCombo",
        "description":"Conţine următorii alergeni: Gluten, SEMINȚE de susan, Lapte, OUĂ, MUȘTAR",
        "content": "O felie de carne de pui într-un strat crocant de pesmet auriu, însoţită de sos McPuișor, castraveţi muraţi și chiflă.",
        "price":"1$"
         },
  
        {"id":2,
        "name":"McNuggeets",
        "description":"Conţine următorii alergeni: Gluten, ȚELINĂ",
        "content": "Bucăţi de piept de pui fragede în interior, aurii și crocante la exterior, învelite într-un strat pané crocant.",
        "price":"4$"
         },
  
        {"id":3,
        "name":"BigMac",
        "description":"Conţine următorii alergeni: Gluten, Soia, SEMINȚE de susan, Lapte, OUĂ, MUȘTAR",
        "content": "Două felii de carne de vită tocată preparate pe grătar, asezonate cu sare și piper, sos Big Mac și brânză Cheddar, salată crocantă, ceapă, felii de castraveţi muraţi, chiflă Big Mac cu susan.",
        "price":"4.75$"
        },
  
        {"id":4,
        "name":"ChickenGrill",
        "description":"Conţine următorii alergeni: Gluten, Soia, SEMINȚE de susan, Lapte, OUĂ, MUȘTAR",
        "content": "Piept de pui fraged, preparat la grătar, însoţit de legume proaspete (salată Eisberg, roșie, ceapă albă) și sos de MUȘTAR cu miere, îmbinate într-o chiflă delicioasă cu seminţe de susan albe și negre.",
        "price":"2.5$"
        },
  
        {"id":5,
        "name":"FiletDeluxe",
        "description":"Conţine următorii alergeni: Gluten, SEMINȚE de susan, OUĂ. Poate conţine următorii alergeni: ȚELINĂ",
        "content": "Te-am convins? Testează unicul Homestyle Crispy Chicken, în ediție limitată.",
        "price":"3.5$"
        }
        
    ];

  }
}
