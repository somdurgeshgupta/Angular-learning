import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Order } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrdersummaryService {


  order : Order[] = [
    {
      id: 1,
      name : "Som Durgesh Gupta",
      email : "somdurgeshgupta@gmail.com",
      phone : 111
    },
    {
      id: 1,
      name : "Sam Gupta",
      email : "somdurgeshgupta@gmail.com",
      phone : 111
    },
    {
      id: 1,
      name : "Atharva Gupta",
      email : "somdurgeshgupta@gmail.com",
      phone : 111
    },
  ];

  // private _url: string = "../assets/data/osp.json";

  constructor(private http:HttpClient) { }

  // getOrderSummary(): Observable<IOsp[]>{
  //   return this.http.get<IOsp[]>(this._url);
  // }
  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error");
  // }

  onGet(){
    return this.order;
  }
}
