import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();

  sendSearchText(message: string) {
        this.subject1.next({ text: message });
    }

  getSearchText(): Observable<any> {
        return this.subject1.asObservable();
    }

  sendPagination(message: string) {
        this.subject2.next({ number: message });
    }

  getPagination(): Observable<any> {
        return this.subject2.asObservable();
    }

  constructor() { }
}
