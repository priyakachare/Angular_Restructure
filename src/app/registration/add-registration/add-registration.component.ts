import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StepperFormService } from '../../common/stepper-form/stepper-form.service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.scss']
})
export class AddRegistrationComponent implements OnInit {

  blocks = [
    {
      name : 'Applicant details',
      id : 'applicant-dtls-tab',
      href : '#applicant-dtls',
      class : 'nav-link active',
      areaControl : 'applicant-dtls'
    },
    {
      name : 'Payment details',
      id : 'applicant-pay-tab',
      href : '#applicant-pay',
      class : 'nav-link',
      areaControl : 'applicant-pay'
    },{
      name : 'KYC documents',
      id : 'kyc-doc-tab',
      href : '#kyc-doc',
      class : 'nav-link',
      areaControl : 'kyc-doc'
    }
  ]

  faCalendarAlt = faCalendarAlt;
  faTrash = faTrash;
  model : any;
  selectedPaymentMode : any;
  paymentMode : any;
  selectedScheme2 : any;
  scheme2 : any;
  selectedPaymentType2 : any;
  paymentType2 : any;
  selectedScheme : any;
  scheme : any;
  selectedPaymentType : any;
  paymentType :any;
  selectedPipeline : any;
  pipeline : any;
  selectedVip : any;
  vip : any;
  selectedOwnership : any;
  Ownership : any;
  selectedConsumerSubCategory : any;
  consumerSubCategory : any;
  selectedConsumerCategory : any;
  consumerCategory : any;
  selectedDocument : any;
  document : any;
  email: any;
  mobileNo : any;
  selectedUtility : any;
  utility : any;
  lastName : any;
  middleName : any;
  firstName : any;
  selectedBillingSubArea : any;
  billingSubArea : any;
  selectedBillingArea : any;
  billingArea : any;
  selectedBillingZipCode : any;
  billingZipCode : any;
  selectedBillingCity: any;
  billingCity : any;
  selectedBillingAddress : any;
  billingAddress : any;
  selectedSubArea : any;
  subArea : any;
  selectedArea : any;
  area : any;
  selectedZipCode : any;
  zipCode : any;
  selectedCity : any;
  city : any;
  selectedStateProvince : any;
  stateProvince : any;

  constructor(private stepperFormService:StepperFormService) { }

  ngOnInit(): void {
    this.sendStepperFormData()
  }

  sendStepperFormData(){
    this.stepperFormService.stepperFormEvent.emit(this.blocks);
  }

}
