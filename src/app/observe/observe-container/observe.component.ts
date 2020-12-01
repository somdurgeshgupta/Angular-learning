import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss']
})
export class ObserveComponent implements OnInit {

  orderStatus : any;
  data : Observable<any>;
  data2 : Observable<any>;

  constructor() { }

  ngOnInit(): void {


    this.data = new Observable(observer => {

      setTimeout(() => { observer.next('In Progress');}, 4000);
      setTimeout(() => {
        observer.next('In Processing');
      }, 8000);  
      setTimeout(() => {
        observer.next('Completed');
      }, 10000); 
      setTimeout(() => {
        observer.error('Completed');
      }, 10000);  
      
      setTimeout(() => {
        observer.complete();
      }, 10000);

      
      setTimeout(() => {
        observer.complete();
      }, 10000);

    });
    
    this.data.subscribe( val => {
       this.orderStatus = val;
    });

    this.data.subscribe( val2 => {
      console.log('second subscription');
   });
  }

}
