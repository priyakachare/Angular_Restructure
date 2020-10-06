import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  private subject1 = new Subject<any>();

  sendPayments(data: any) {
    this.subject1.next({ payments : data });
  }

  getPayments(): Observable<any> {
    return this.subject1.asObservable();
  }

  constructor() { }
}
