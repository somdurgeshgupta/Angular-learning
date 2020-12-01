import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private  http : HttpClient) { }

  getContacts(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

  return this.http.get('http://localhost:3000/contacts',{headers : httpHeaders});
  }

  createContact(createBody){
    return this.http.post('http://localhost:3000/contacts', createBody);
  }

  callingfromtemplete(){
    console.log('calling from templete directly')
  }
}
