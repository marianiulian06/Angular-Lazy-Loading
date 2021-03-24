import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employees service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  
  employees = [] as  any; 
  constructor( private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
