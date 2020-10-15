import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { SessionService } from '../common-services/session-service/session.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any=[];
  constructor(private http : HttpClient,private sessionService:SessionService) {
    
   }

  

  getUserListData():Observable<any>{
    //get value of token and id string from sessionStorage
    this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/list', httpOptions)
  }
}
