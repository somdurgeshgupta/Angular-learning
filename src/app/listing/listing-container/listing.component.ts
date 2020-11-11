import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  displayName=true;


  title={
    "success":true,
    "data":{
      "feed":{
        "leftButton":"Reset",
        "RightButton":"Apply",
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
