import { Injectable, Output, EventEmitter } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class StepperFormService {

  @Output() stepperFormEvent = new EventEmitter<any>();

  constructor() { }
}
