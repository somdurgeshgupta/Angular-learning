import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   public 'name'='somdurgesh gupta';
   public date = new Date();

   url = '/assets/data/properties.json';

  properties: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get(this.url).subscribe(
      data=>console.log(data)
    );
  }
}
