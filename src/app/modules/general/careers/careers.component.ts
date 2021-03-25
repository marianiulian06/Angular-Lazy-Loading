import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})



export class CareersComponent   implements OnInit {

  jobs=['Manager Trainee','Crew - Lucrător restaurant','Barista','Hostess'];
  userModel = new User('Marian','Iulian','nume@test.com',7244027381,'Ploiesti','Bulevardul Bucuresti nr39',this.jobs[0],'exemplu de text');

  constructor() { }
  ngOnInit(): void {
  }

    onSubmit(){
        console.log(this.userModel);
    /* this._enrollmentService.enroll(this.userModel)
    .subscribe(
            data  => console.log("Success!", data),
           error  => console.log("Eroare!", error)
    )} */

}

}

