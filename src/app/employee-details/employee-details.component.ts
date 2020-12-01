import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    // this._employeeService.getEmployees().subscribe(data => this.employees = data,
    //              error => this.errorMsg = error);

  }


}
