import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  data;
  setter(id_string,data,token,token_data){
  	sessionStorage.setItem("UserDetails",JSON.stringify({id_string:data,token:token_data}))
  }

  getter():Observable<any>{
    var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))  
    this.data = {"id_string":userDetail.id_string,"token":userDetail.token} 
    return this.data
  }

  
}
