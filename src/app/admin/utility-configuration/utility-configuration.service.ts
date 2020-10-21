import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityConfigurationService {
  token;
  utility_id_string;
  constructor(private http:HttpClient,private sessionService:SessionService) { }

  // API for Taking Role List
  getRoleList():Observable<any>{

    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'role/list',httpOptions)
   }

   // API for Taking utility wise Role Type List
  getRoleTypeList():Observable<any>{

    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
   this.utility_id_string = this.sessionService.getter("utility_id_string")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'utility/'+this.utility_id_string+'/role-type/list',httpOptions)
   }

  // API for Taking Role Sub Type List
  getRoleSubTypeList(id_string):Observable<any>{
    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'utility/role-type/'+id_string+'/role-subtype/list',httpOptions)
   }

   // API for Taking FormFactor List
  getFormFactorList():Observable<any>{
    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
   this.utility_id_string = this.sessionService.getter("utility_id_string")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+this.utility_id_string+'/form-factor/list',httpOptions)
   }

  // API for Taking FormFactor List
  getDepartmentList():Observable<any>{
    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
   this.utility_id_string = this.sessionService.getter("utility_id_string")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+this.utility_id_string+'/department/list',httpOptions)
   }

   // API for Taking utility module List
  getUtilityModuleList():Observable<any>{
    //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
   this.utility_id_string = this.sessionService.getter("utility_id_string")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'utility/'+this.utility_id_string+'/module/list',httpOptions)
   }

   
}
