import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() moduleName = new EventEmitter<string>();
  @Output() moduleObj = new EventEmitter<string>();
  @Output() sideNavId = new EventEmitter<string>();
  @Output() utilityList = new EventEmitter<string>();
  @Output() utilityIdString = new EventEmitter<string>();
  @Output() checkBlankUtility = new EventEmitter<string>();

  constructor(private http:HttpClient) {
   }

   // Login API
   login(data):Observable<any>{
     return this.http.post(baseUrl+'user/login/',data)
   }

   token;
   id_string;
   // API for checking Role & Privileges
   checkRolePrivilege():Observable<any>{
   
   //get value of token and id string from sessionStorage
   var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
   this.token = userDetail.token
   this.id_string = userDetail.id_string

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string+'/role/',httpOptions)
  }

  // API for getting Single User Details
   getUserDetails():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string,httpOptions)
   }

    // API for Taking utilities of user
   getUserUtility():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string+'/utility/',httpOptions)
   }

    // API for list of Module according to utility
   getUtilityModuleList(selected_utility):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'utility/'+selected_utility+'/module/list',httpOptions)
   }

    // API for list of Sub Module according to utility
    getUtilitySubModuleList(selected_utility):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.get(baseUrl+'utility/'+selected_utility+'/submodule/list',httpOptions)
     }

    // API for logout
    logOut(id_string):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.post(baseUrl+'user/logout/',{"id_string":id_string},httpOptions)
     }



    // API for sending email for password reset
    sendEmail(model: any){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let options = { headers: headers };
      return this.http.post(baseUrl + "user/request-reset-email" +'/', model, options);
    }

    // API for reset-password
    resetPassword(model: any){
      return this.http.patch(baseUrl + "user/password-reset-complete/<uidb64>/<token>" +'/', model);
    }

    // API for change-password
    changePassword(model: any){
      var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
      this.token = userDetail.token
      console.log(this.token)
      let headers = new HttpHeaders({
        'Content-Type': 'application/json' ,'Authorization': this.token
        // changePasswordUrl:this.changePasswordUrl
      });
      let options = { headers: headers };
      return this.http.put(baseUrl + "user/change-password" +'/', model,options);
    }
}

  
  