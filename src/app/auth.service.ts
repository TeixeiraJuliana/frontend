import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders
  constructor(
    private http: HttpClient

  ) { 
    this.headers = new HttpHeaders().set('Content-type', 'application/json')
  }

  getUsers() {
   
    const url =  environment.API + '/api/posts'
    console.log(url)
    return this.http.get<any>(url)
  }
}
