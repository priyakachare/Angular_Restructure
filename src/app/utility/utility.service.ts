import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  token;
  id_string;
  constructor(private http : HttpClient) {} 

 getUtilityListData():Observable<any>{
   //get value of token and id string from sessionStorage
   var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
   this.token = userDetail.token

   const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
   };
   return this.http.get(baseUrl+'utility/list', httpOptions)
 }

 // API for Taking Module list from commonapp
 getModuleListData():Observable<any>{
  return this.http.get(baseUrl+'module/list')
}

// API for Taking countries list from commonapp
  getCountriesListData():Observable<any>{
    var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
    this.token = userDetail.token

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'countries',httpOptions)
  }

  // API for Taking regions list from commonapp
  getRegionsListData():Observable<any>{
    var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
    this.token = userDetail.token

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'regions',httpOptions)
  }

  // // API for Taking State list from commonapp
  // getStateListData():Observable<any>{
  //   var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
  //   this.token = userDetail.token

  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
  //   };
  //   return this.http.get(baseUrl+'states',httpOptions)
  // }

  // // API for Taking City list from commonapp
  // getCityListData():Observable<any>{
  //   var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
  //   this.token = userDetail.token

  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
  //   };
  //   return this.http.get(baseUrl+'cities',httpOptions)
  // }


// API for add utility
addUtility(data):Observable<any>{
  var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
  this.token = userDetail.token
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
  };
  return this.http.post(baseUrl+'utility/', data ,httpOptions)
  }
}
