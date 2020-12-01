import { Component, OnInit } from '@angular/core';
import { ExternalLibraryService } from '../../util';

declare let Razorpay: any;
@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.scss']
})
export class RazorpayComponent implements OnInit {
  constructor(private razorpayService: ExternalLibraryService) { }
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;

  ngOnInit() { }

  RAZORPAY_OPTIONS = {
    "key": "rzp_test_8W4H8SbyppCwmX",
    "amount": "100",
    "name": "Novopay",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "test@test.com",
      "contact": "",
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount;

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();
    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    this.razorpayResponse = `Razorpay success`;
    this.showModal = true;
    document.getElementById('razorpay-response').style.display = 'block';
  }

}
