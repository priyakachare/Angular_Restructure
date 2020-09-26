import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  constructor(private http:HttpClient) {

  }

  getReadingDatatable():Observable<any>{
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkX3N0cmluZyI6IjA2ZGM3ZmNmLWU3MjctNDMyZS04MWRiLWU5YjhhM2YzYzBmMiIsInN0cmluZyI6Ijk0QkE0OCJ9.0oGQ7g1EF4lOAJ9bnFs4iX9WF9GpI5GVni46z09AuqQ"
    const httpOptions = {
      headers : new HttpHeaders ({ 'Content-Type': 'appication/json', 'Authorization': token})
    };

    return this.http.get( baseUrl + 'meter-data/schedule/list', httpOptions)
  }

}
