import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { SessionService } from '../common-services/session-service/session.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() moduleName = new EventEmitter<string>();
  @Output() moduleObj = new EventEmitter<string>();
  @Output() sideNavId = new EventEmitter<string>();
  @Output() utilityList = new EventEmitter<string>();
  @Output() defaultUtility = new EventEmitter<string>();
  @Output() utilityIdString = new EventEmitter<string>();
  @Output() checkBlankUtility = new EventEmitter<string>();

  public changeTabSource = new Subject<any>(); // it use for component communication(pass the data without relation of component)
  public subModuleList = new Subject<any>();
  private selectedUtilityDisplay = new BehaviorSubject<any>('');
  currentMessageSource = this.selectedUtilityDisplay.asObservable();

  // currentTabSource = this.changeTabSource.asObservable();

  constructor(private http:HttpClient,private sessionService:SessionService) {
   }

   // Login API
   login(data){
     return this.http.post(baseUrl+'user/login/',data)
   }

   token;
   id_string;
   userDetail;
   
   // API for checking Role & Privileges
   checkRolePrivilege(){
   
   //get value of token and id string from sessionStorage
   this.token = this.sessionService.getter("token")
   this.id_string = this.sessionService.getter("id_string")

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string+'/role/',httpOptions)
  }

  // API for getting Single User Details
   getUserDetails(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string,httpOptions)
   }

    // API for Taking utilities of user
   getUserUtility(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'user/'+this.id_string+'/utility/',httpOptions)
   }

    // API for list of Module according to utility
   getUtilityModuleList(selected_utility){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'utility/'+selected_utility+'/module/list',httpOptions)
   }

    // API for list of Sub Module according to utility
    getUtilitySubModuleList(selected_utility){
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.get(baseUrl+'utility/'+selected_utility+'/submodule/list',httpOptions)
     }

    // API for logout
    logOut(id_string){

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

    // store utility id_string for pass the utility id_string to bento component
    getUtilities(msg?){
      this.changeTabSource.next(msg); // it only hold the data
    } 

    // it hold the utility id_string and pass to side nav
    getSideNavData(msg?){
      this.subModuleList.next(msg)
    }

    
    selectedUtility(msg?){ 
      this.selectedUtilityDisplay.next(msg)
    }
  } 
  