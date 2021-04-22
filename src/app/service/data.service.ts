import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  public addNewResources(data) {
    return this.httpClient.post<any>(
      'http://localhost:7272' + '/unprotected/newResources',
      {
        typeid : data.typeid,
        name: data.name,
        contactpersonname: data.contactpersonname,
        contact: data.contact,
        altercontact: data.altercontact,
        email: data.email, 
        website: data.website,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country
      }
    );
  }
}
