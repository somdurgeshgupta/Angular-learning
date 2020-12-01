import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup;//give same form name as in template
  itemsArr = FormArray;

  valueChangesTracked='';

  constructor(private formBuilder: FormBuilder) {
    // this.checkoutForm = formBuilder.group({ //building the form using form builder
    //   emailAddr: new FormControl(), // in the formbuilder we are creating the group of form elements
    //   quantity: new FormControl(), 
    //   terms: new FormControl(),
    // });

    this.checkoutForm = formBuilder.group({ //building the form using form builder
      emailAddr: ['', [Validators.minLength(8),Validators.maxLength(16),Validators.required, Validators.email]], // in the formbuilder we are creating the group of form elements
      quantity: ['', Validators.required], 
      terms: ['', Validators.requiredTrue],
    });
   }

  ngOnInit(): void {

    // this.checkoutForm.get('emailAddr').valueChanges.subscribe(data => {
    //   this.valueChangesTracked = data;
    // })
    /*
    this.checkoutForm.setValue({
      emailAddr: 'test@test.com',
      quantity: 10,
      terms : true
    });
    */

    this.checkoutForm.valueChanges.subscribe(data => {
      console.log(data)
    });
   this.checkoutForm.patchValue({
    emailAddr: 'test@test.com',
    quantity: 10,
  });
  }

  postData(){
    console.log(this.checkoutForm.value);
    this.resetForm();
  }

  resetForm(){
    this.checkoutForm.reset()
  }

}
