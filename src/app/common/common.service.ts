import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
   }
}
