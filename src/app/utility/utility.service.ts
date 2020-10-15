import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { SessionService } from '../common-services/session-service/session.service';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  token;
  tenant_id_string;
  utility_id_string;
  constructor(private http : HttpClient,private sessionService:SessionService) {} 

 getUtilityListData(utility_id_string):Observable<any>{
   //get value of token and utility_id_string from sessionStorage
   this.token = this.sessionService.getter("token")
   const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
   };
   return this.http.get(baseUrl+'utility/'+utility_id_string, httpOptions)
 }

 // API for Taking Module list from commonapp
  getModuleListData(tenant_id_string):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.get(baseUrl+'tenant/'+tenant_id_string+'/module/list',httpOptions)
  }

  // API for Taking Sub Module list from commonapp
  getSubModuleListData(module_id_string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'tenant/module/'+module_id_string+'/submodule/list',httpOptions)
  }

// API for Taking countries list from commonapp
  getCountriesListData():Observable<any>{
    this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'countries',httpOptions)
  }

  // API for Taking regions list from commonapp
  getRegionsListData():Observable<any>{
    this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'regions',httpOptions)
  }

  // API for Taking Category list from commonapp
  getCategoryListData():Observable<any>{
    this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.get(baseUrl+'category/list',httpOptions)
  }

    // API for Taking product list from commonapp
    getProductListData():Observable<any>{
      this.token = this.sessionService.getter("token")  
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.get(baseUrl+'product/list',httpOptions)
    }

    // API for Taking Tenant list from utility
    getTenantListData():Observable<any>{
      this.token = this.sessionService.getter("token")  
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
      };
      return this.http.get(baseUrl+'tenant/list',httpOptions)
    }


  // API for add utility
  addUtility(data):Observable<any>{
    this.token = this.sessionService.getter("token")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': this.token})
    };
    return this.http.post(baseUrl+'utility/', data ,httpOptions)
    }
}
