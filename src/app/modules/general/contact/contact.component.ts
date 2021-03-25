import { Component, OnInit } from '@angular/core';
import { UserContact } from './UserContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userModel = new UserContact('Marian','Iulian','nume@test.com','exemplu de text');
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
  }

}
