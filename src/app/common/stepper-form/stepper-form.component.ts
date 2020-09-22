import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blocks = [
    {
      name : 'Applicant Details',
      class: 'nav-link active',
      id: 'applicant-dtls-tab',
      href: '#applicant-dtls'
    },
    {
      name : 'Payments',
      class: 'nav-link',
      id: 'applicnt-pay-tab',
      href: '#applicant-pay'
    },
    {
      name : 'Address Details',
      class: 'nav-link',
      id: 'applicant-addr-tab',
      href: '#applicant-addr'
    },
    {
      name : 'KYC Documents',
      class: 'nav-link',
      id: 'applicant-dtls-tab',
      href: '#applicnt-dtls'
    },
    {
      name : 'Review &amp; Submit',
      class: 'nav-link',
      id: 'applicant-dtls-tab',
    }
  ]

}
