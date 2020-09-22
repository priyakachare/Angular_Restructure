import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  @Output() filterEvent = new EventEmitter<any>();
  private subject = new Subject<any>();

  sendSearchText(message: string) {
        this.subject.next({ text: message });
    }

  getSearchText(): Observable<any> {
        return this.subject.asObservable();
    }

  sendPagination(message: string) {
        this.subject.next({ number: message });
    }

  getPagination(): Observable<any> {
        return this.subject.asObservable();
    }

  constructor() { }
}
