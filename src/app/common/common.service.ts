import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() newItemEvent = new EventEmitter<string>();

  @Output() sideNavId = new EventEmitter<string>();

  constructor(private http:HttpClient) {
   }

   login(data):Observable<any>{
     return this.http.post(baseUrl+'user/login/',data)
   }
}
