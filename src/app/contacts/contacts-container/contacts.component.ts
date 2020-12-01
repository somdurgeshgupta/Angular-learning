import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../Services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public contactService : ContactsService) { }
  msgTrue = false;
  contactList : any;

  ngOnInit(){
    this.contactService.getContacts().subscribe(data => {
      this.contactList= data;
    })
    
  }
  
  addNewContact(){
    const newFormData = { id:8, firstName: "some" , lastName: "gupta"};

    this.contactService.createContact(newFormData).subscribe(data => {
      console.log('data');
      this.msgTrue= true;
    })
  }

}
