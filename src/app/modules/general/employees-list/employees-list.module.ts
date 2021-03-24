import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListRoutingModule } from './employees-list-routing.module';
import { EmployeesListComponent } from './employees-list.component';
import { EmployeeService } from './employees service/employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeesListComponent],
  imports: [
    CommonModule,
    EmployeesListRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService], 
})
export class EmployeesListModule { }
