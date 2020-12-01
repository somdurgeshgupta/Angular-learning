import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing-container/listing.component';
import { HomeComponent } from './home/home-container/home.component';
import { SharedModule } from './shared/shared.module';
import { from } from 'rxjs';
import { EmployeeListComponent } from './employee-list/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './Services/employee.service';
import { OrdersummaryComponent } from './ordersummary/ordersummary/ordersummary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaytmComponent } from './paytm/paytm-container/paytm.component';
import { LearnComponent } from './learn/learn/learn.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout-container/checkout.component';
import { ObserveComponent } from './observe/observe-container/observe.component';
import { ContactsComponent } from './contacts/contacts-container/contacts.component';
import { RazorpayComponent } from './razorpay/razorpay-container/razorpay.component';



@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    OrdersummaryComponent,
    PageNotFoundComponent,
    PaytmComponent,
    LearnComponent,
    SigninComponent,
    CheckoutComponent,
    ObserveComponent,
    ContactsComponent,
    RazorpayComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
