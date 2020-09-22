import { Component, OnInit } from '@angular/core'; 
import { StepperFormService } from './stepper-form.service';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {

  constructor(private stepperFormService:StepperFormService) {
    this.stepperFormService.stepperFormEvent.subscribe(data =>{
      this.blocks = data
    })
  }

  ngOnInit(): void {
  }

  blocks = []

}
