import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  data;
  //set the value in Session storage
  setter(key,data){
  	sessionStorage.setItem(key,data)
  }

  //get the value from Session storage
  getter(key):Observable<any>{
    this.data = sessionStorage.getItem(key)  
    return this.data
  }

  
}
