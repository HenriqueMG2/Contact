import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

 
  GetContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.ApiUrl}/Contact`);
  }

  DeleteContact(id:number) : Observable<Contact>{
    return this.http.delete<Contact>(`${this.ApiUrl}/Contact/${id}`);
  }

  CreateContact(conctact: Contact) : Observable<Contact>{
    return this.http.post<Contact>(`${this.ApiUrl}/Contact`, conctact);
  }

  GetContactById(id:number):Observable<Contact>{
    return this.http.get<Contact>(`${this.ApiUrl}/Contact/${id}`);
  }

  EditContact(id:number, contact: Contact):Observable<Contact>{
    return this.http.put<Contact>(`${this.ApiUrl}/Contact/${id}`, contact);
  }

}
