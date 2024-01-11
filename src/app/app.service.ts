import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private headers: HttpHeaders;

  constructor(
      private http: HttpClient


  ){
      this.headers = new HttpHeaders().set('Content-Type', 'application/json');

  }

  public registerClockList(): Observable<any> {
    
    return this.http.get<any>(
      environment.BASE_URL + 'pushClock/register_list',
      {headers: this.headers}
    );
  }

}
