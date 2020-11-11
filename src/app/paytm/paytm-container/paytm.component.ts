// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// import { PaytmService } from 'src/app/Services/paytm.service';
import { IPaytm } from 'src/assets/data/paytm';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.scss']
})
export class PaytmComponent implements OnInit {


  posts: IPaytm[];

  paytm = new IPaytm();

  error : string

  constructor(private http:HttpClient) { }

  ngOnInit(){
  }

  // onKey(key,event) {
  //   this.paytm.name=event.target.value;
  // }

  paynow(paymentForm : NgForm){
    console.log(paymentForm);
  }

  // paynow(paymentForm : NgForm){
  //   console.log(this.paytm)
  //   return this.paytmservice.payment(this.paytm).subscribe(
  //     data => this.posts.push(data),
  //     error => this.error = error
  //   )
  // }
}
