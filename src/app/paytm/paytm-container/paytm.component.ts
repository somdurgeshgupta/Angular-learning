import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PaytmService } from 'src/app/Services/paytm.service';
import { FormGroup, FormControl,FormBuilder, Validators, FormArray, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.scss']
})
export class PaytmComponent implements OnInit {

  paymentForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    amount : new FormControl('')
  })

  constructor(private paytmService : PaytmService, private fb: FormBuilder) { 
  }

  ngOnInit(){
  }

  // paymoney(data){
  //   console.log(data);
  //   this.paytmService.payment(data).subscribe(result => {
  //     console.log(result);
  //   });
  // }

  paymoney(){
    // console.log(this.paymentForm.value);
    this.paytmService.payment(this.paymentForm.value).subscribe((result) => {
      console.log(`this data is comming from server` +result);
    });
  }
}
