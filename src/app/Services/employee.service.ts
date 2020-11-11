import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../../assets/data/employee';
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {

  private _url: string = "../assets/data/employee.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
