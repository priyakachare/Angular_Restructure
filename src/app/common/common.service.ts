import { HttpClient, HttpHeaders} from '@angular/common/http';
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

   // Login API
   login(data):Observable<any>{
     return this.http.post(baseUrl+'user/login/',data)
   }

   // API for checking Role & Privileges
   checkRolePrivilege(token,id_string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': token})
    };
    return this.http.get(baseUrl+'user/'+id_string+'/role/',httpOptions)
  }

  // API for getting Single User Details
   getUserDetails(token,id_string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': token})
    };
    return this.http.get(baseUrl+'user/'+id_string,httpOptions)
   }

   
}

  
  