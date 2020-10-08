import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any=[];
  constructor(private http : HttpClient) {
    
   }

  

  getUserListData():Observable<any>{
    //get value of token and id string from sessionStorage
    var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
    this.token = userDetail.token

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/list', httpOptions)
  }
}
