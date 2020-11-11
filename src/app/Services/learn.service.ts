import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(private http : HttpClient) {  }

  getData(){
    let url=`${environment.url}`;
    return this.http.get(url);
  }
}
