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
    const url =  environment.API + 
    ' api/register'
    //'/logout'
    //'/api/user'
    //'/api/posts'
    return this.http.get<any>(url)
  }

  getLogout(teste: any) {
    const url =  environment.API + '/logout'
    return this.http.post<any>(url, teste)
  }
}



