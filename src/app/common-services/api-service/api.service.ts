import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkX3N0cmluZyI6IjkxZDhjZmE5LWM3ZWUtNGQ1NS04NjE3LWYzNjI2MDg2M2M0OCIsInN0cmluZyI6IkY0MEM4RSJ9.lsL5VU3NJl-Tnq-96sIU8_0mACRWDNU9zifrtBQL-pM'})
  };

  constructor(private http : HttpClient) { }

  get(url):Observable<any>{
  	return this.http.get(baseUrl+url, this.httpOptions)
  }

  post(url, data):Observable<any>{
  	return this.http.post(baseUrl+url, data, this.httpOptions)
  }

  put(url, data):Observable<any>{
  	return this.http.put(baseUrl+url, data, this.httpOptions)
  }
}
