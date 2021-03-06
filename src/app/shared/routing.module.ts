import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from '../listing/listing-container/listing.component';
import { HomeComponent } from '../home/home-container/home.component';
import { EmployeeListComponent } from '../employee-list/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { OrdersummaryComponent } from '../ordersummary/ordersummary/ordersummary.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { IconableComponent } from '../iconable/iconable/iconable.component';
import { PaytmComponent} from "../paytm/paytm-container/paytm.component";
import { LearnComponent } from '../learn/learn/learn.component';
import { SigninComponent } from '../signin/signin.component';
import { CheckoutComponent } from '../checkout/checkout-container/checkout.component';
import { ObserveComponent } from '../observe/observe-container/observe.component';
import { ContactsComponent } from '../contacts/contacts-container/contacts.component';
import { RazorpayComponent } from '../razorpay/razorpay-container/razorpay.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'emp-list', component: EmployeeListComponent },
  { path: 'emp-detail', component: EmployeeDetailsComponent },
  { path: 'osp', component: OrdersummaryComponent },
  { path: 'ico', component: IconableComponent },
  { path: 'paytm', component: PaytmComponent},
  { path: 'learn', component: LearnComponent}, 
  { path: 'observe', component: ObserveComponent}, 
  { path: 'signin', component: SigninComponent},
  { path: 'checkout', component: CheckoutComponent},  
  { path: 'razorpay', component: RazorpayComponent},
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
