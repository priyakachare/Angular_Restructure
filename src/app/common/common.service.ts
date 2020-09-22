import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() newItemEvent = new EventEmitter<string>();

  @Output() sideNavId = new EventEmitter<string>();

  constructor() {
   }
}
