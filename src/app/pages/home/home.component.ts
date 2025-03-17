import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/Contact';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  contacts: Contact[] = [];
  allContacts: Contact[] = [];

  constructor(private contactService:ContactService){}
 
 
  ngOnInit(): void {
    
    this.contactService.GetContacts().subscribe(response => {
        this.contacts = response;
        this.allContacts = response;
    })

  }

  search(event:Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.contacts = this.allContacts.filter(contact =>{
      return contact.name.toLowerCase().includes(value);
    })
  }

  deletar(id:number){
    this.contactService.DeleteContact(id).subscribe(response => {
      window.location.reload()
    })
  }


}
