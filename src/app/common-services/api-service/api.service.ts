import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkX3N0cmluZyI6IjYzOGJjNjliLTlhMjgtNGVmNi04YjE5LWNhNGI2ZDQzNTE1ZCIsInN0cmluZyI6IkQ2N0Y2OSJ9.1lIjrbuQyImmPX0Ib-S14mAUdpllfGCOE2jwKuX0A9s'})
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
