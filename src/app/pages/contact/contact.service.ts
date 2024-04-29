import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../interfaces/ICard';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  handleGetAllContacts(): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.api}`)
  }

  handleCreateContact() {

  }

  handleEditContact() {

  }

  handleDeletContact(contactId: string) {
    return this.http.delete(`${this.api}/delete`)
  }

}
