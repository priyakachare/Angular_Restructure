import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NoteDetailsService {

  private subject1 = new Subject<any>();

  constructor() { } 

  sendNoteResponse(data: any) {
    this.subject1.next({ data: data });
  }

  getNoteResponse(): Observable<any> {
    return this.subject1.asObservable();
  }
}
