import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.scss']
})
export class AddRegistrationComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
