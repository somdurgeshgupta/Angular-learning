import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OrdersummaryService } from '../../Services/ordersummary.service'
import { Order } from '../../models/order.models';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.scss']
})
export class OrdersummaryComponent implements OnInit {

  order : Order[];
  // public orderSummary = [];
  // public errorMsg;

  constructor(private ordersummaryService: OrdersummaryService) { }

  ngOnInit(): void{
    // this._ordersummaryService.getOrderSummary()
    //   .subscribe(data => this.orderSummary = data,
    //             error => this.errorMsg = error);

   this.order = this.ordersummaryService.onGet();
  }
}
