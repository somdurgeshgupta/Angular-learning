import { Component, OnInit } from '@angular/core';
import { LearnService }from '../../Services/learn.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  

  public learn = {};
  public errorMsg;

  constructor(private _learnService : LearnService) { }

  ngOnInit(){
    this._learnService.getData().subscribe(data => this.learn = data,
      error => this.errorMsg = error);
  }
  postData={
    "test":"jsontest",
    "myCultur" : "Promis request"
  };

}
