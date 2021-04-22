import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public serverURL = 'http://localhost:7272'
  constructor(private httpClient: HttpClient) { }

  public addNewResources(data) {
    try {
      return this.httpClient.post<any>(
        this.serverURL + '/unprotected/addResources',
        {
          typeid: data.typeid,
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
      ).subscribe(this.handleError.bind(this));
    }
    catch (error) {
      console.log(error);
    }
  }

  public getResourcesType() {
    return this.httpClient.get<any>(
      this.serverURL + '/unprotected/fetchResources', {
      params: new HttpParams({}), observe: 'response'
    }
    ).pipe(retry(3), catchError(
      this.handleError
    ), tap((res) => { })
    )
  }

  handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknow error!;';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error :${ error.error.message}`;
      } else {
        errorMessage = `Status : ${ error.status} \nMessage :${ error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
  }
}
