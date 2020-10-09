import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';
  
  


  constructor(private http: HttpClient) { }

  getGlobal() {
    return this.http.get(`${this.apiUrl}all`);
  }

  getCountries() {
    return this.http.get("https://coronavirus-19-api.herokuapp.com/countries");
  }



  
}
