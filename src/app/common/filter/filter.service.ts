import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  @Output() filterEvent = new EventEmitter<any>();

  constructor() { }
}
