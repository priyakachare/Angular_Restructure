import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StepperFormService } from '../../common/stepper-form/stepper-form.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { RegistrationService } from '../registration.service';
import { ApiService } from '../../common-services/api-service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $ : any;


@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.scss']
})
export class AddRegistrationComponent implements OnInit {

  // Stepper data start
  blocks = [
    {
      name : 'Applicant details',
      id : 'applicant-dtls-tab',
      href : '#applicant-dtls',
      class : 'nav-link active',
      areaControl : 'applicant-dtls',
      listClass : 'nav-item list-group-item active'
    },
    {
      name : 'Payment details',
      id : 'applicant-pay-tab',
      href : '#applicant-pay',
      class : 'nav-link',
      areaControl : 'applicant-pay',
      listClass : 'nav-item list-group-item'
    },
    {
      name : 'Address details',
      id : 'applicant-addr-tab',
      href : '#applicant-addr',
      class : 'nav-link',
      areaControl : 'applicant-addr',
      listClass : 'nav-item list-group-item'
    },
    {
      name : 'KYC documents',
      id : 'kyc-doc-tab',
      href : '#kyc-doc',
      class : 'nav-link',
      areaControl : 'kyc-doc',
      listClass : 'nav-item list-group-item'
    },
    {
      name : 'Review & Submit',
      id : 'rvw-sbmt-tab',
      href : '#rvw-sbmt',
      class : 'nav-link',
      areaControl : 'rvw-sbmt',
      listClass : 'nav-item list-group-item'
    }
  ]
  // Stepper data end

  // Forms build start
  applicantDetailsForm: FormGroup;
  applicantDetailsFormSubmitted = false;
  addressDetailsForm: FormGroup;
  addressDetailsFormSubmitted = false;
  paymentDetailsForm: FormGroup;
  paymentDetailsFormSubmitted = false;
  kycDetailsForm: FormGroup;
  kycDetailsFormSubmitted = false;
  // Forms build end
  
  utilityIdString = '57ed8a45-014a-4f72-826a-dcf6824c454e'
  edit = false;
  chequeDemandDraft = true;
  showtoast = false; 
  autohide = true;
  isAddressSame = false;
  address = ""
  faCalendarAlt = faCalendarAlt;
  faTrash = faTrash;

  document : any[] = [];
  consumerCategories : any[] = [];
  consumerSubCategories : any[] = [];
  ownerships : any[] = [];
  stateProvinces : any[] = [];
  cities : any[] = [];
  areas : any[] = [];
  subAreas : any[] = [];
  paymentModes : any[] = [];
  paymentTypes : any[] = [];
  paymentSubTypes : any[] = [];
  paymentChannels : any[] = [];
  documentTypes : any[] = [];
  documentSubTypes : any[] = [];
  vip =  [
    {id: 'True', name: 'Yes'},
    {id: 'False', name: 'No'},
  ];
  connectivity = [
    {id: 'True', name: 'Yes'},
    {id: 'False', name: 'No'},
  ];

  // files: File[] = [];
  // onSelect(event) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }
  // onRemove(event) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  // close() {
  //   this.autohide = false;
  //   // setTimeout(() => this.autohide = true, 5000);
  // }
  // addCustomUser = (term) => ({id: term, name: term});

  constructor(private stepperFormService:StepperFormService, private formBuilder: FormBuilder, 
    private registrationService : RegistrationService, private apiService : ApiService, private route : ActivatedRoute) {

    this.route.params.subscribe(params => {
      if(params.id != null){
        this.edit = true
      }
    });

    // Applicant details form code start
    this.applicantDetailsForm = this.formBuilder.group({
      firstNameControl: ['', [Validators.required]],
      middleNameControl: ['',],
      lastNameControl: ['', [Validators.required]],
      mobileNoControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required]],
      utilityControl: [null, [Validators.required]],
      consumerCategoryControl: [null, [Validators.required]],
      consumerSubCategoryControl: [null, [Validators.required]],
      ownershipControl: [null, [Validators.required]],
      vipControl: [null, [Validators.required]],
      connectivityControl: [null, [Validators.required]],
    });
    this.applicantDetailsForm.controls.utilityControl.setValue({id_string:"57ed8a45-014a-4f72-826a-dcf6824c454e", name:"MNGL Pune"})
    // Applicant details form code start

    // Payment details form code start
    this.paymentDetailsForm = this.formBuilder.group({
      transactionsControl: this.formBuilder.array(
        [this.formBuilder.group({transaction_type_id:[null], transaction_sub_type_id:[null], transaction_amount:[null], tax_amount:[null]})]
        ),
      paymentTypeControl: [null,],
      paymentModeControl: [null,],
      paymentChannelControl: [null,],
      transactionIdControl: [null,],
      paymentAmountControl: [null,],
      chequeDdControl: [null,],
      transationDateControl: [null,],
    });
    // Payment details form code end

    // KYC details form code start
    this.kycDetailsForm = this.formBuilder.group({
      documentsControl: this.formBuilder.array(
        [this.formBuilder.group({document_type_id:[null], document_sub_type_id:[null], file:[null]})]
        ),
    });
    // KYC details form code end

    // Address details form code start
    this.addressDetailsForm = this.formBuilder.group({
      addressLineControl: ['', [Validators.required]],
      streetControl: ['', [Validators.required]],
      stateProvinceRegionControl: [null, [Validators.required]],
      cityControl: [null, [Validators.required]],
      zipCodeControl: ['', [Validators.required]],
      areaControl: [null, [Validators.required]],
      subAreaControl: [null, [Validators.required]],
      billingAddressLineControl: ['', [Validators.required]],
      billingStreetControl: ['', [Validators.required]],
      billingStateProvinceRegionControl: [null, [Validators.required]],
      billingCityControl: [null, [Validators.required]],
      billingZipCodeControl: [null, [Validators.required]],
      billingAreaControl: [null, [Validators.required]],
      billingSubAreaControl: [null, [Validators.required]],
    });
    // Address details form code end

    // Consumer categories dropdown api call start
    this.apiService.get('consumer/'+this.utilityIdString+'/categories').subscribe(data=>{
      for(let item of data){
        this.consumerCategories.push(item)
      }
    })
    // Consumer categories dropdown api call end

    // Consumer sub categories dropdown api call start
    this.apiService.get('consumer/'+this.utilityIdString+'/sub-categories').subscribe(data=>{
      for(let item of data){
        this.consumerSubCategories.push(item)
      }
    })
    // Consumer sub categories dropdown api call end

    // Consumer ownerships dropdown api call start
    this.apiService.get('consumer/'+this.utilityIdString+'/ownerships').subscribe(data=>{
      for(let item of data){
        this.ownerships.push(item)
      }
    })
    // Consumer ownerships dropdown api call end

    // State/Provience dropdown api call start
    this.apiService.get(this.utilityIdString+'/states').subscribe(data=>{
      for(let item of data){
        this.stateProvinces.push(item)
      }
    })
    // State/Provience dropdown api call end

    // Cities dropdown api call start
    this.apiService.get(this.utilityIdString+'/cities').subscribe(data=>{
      for(let item of data){
        this.cities.push(item)
      }
    })
    // Cities dropdown api call end

    // Areas dropdown api call start
    this.apiService.get(this.utilityIdString+'/areas').subscribe(data=>{
      for(let item of data){
        this.areas.push(item)
      }
    })
    // Areas dropdown api call end

    // Sub Areas dropdown api call start
    this.apiService.get(this.utilityIdString+'/sub-areas').subscribe(data=>{
      for(let item of data){
        this.subAreas.push(item)
      }
    })
    // Sub Areas dropdown api call end

    // Payment types dropdown api call start
    this.apiService.get('payment/payment-types').subscribe(data=>{
      for(let item of data){
        this.paymentTypes.push(item)
      }
    })
    // Payment types dropdown api call end

    // Payment sub types dropdown api call start
    this.apiService.get('payment/payment-sub-types').subscribe(data=>{
      for(let item of data){
        this.paymentSubTypes.push(item)
      }
      console.log(this.paymentSubTypes)
    })
    // Payment sub types dropdown api call end

    // Payment modes dropdown api call start
    this.apiService.get('payment/'+this.utilityIdString+'/payment-modes').subscribe(data=>{
      for(let item of data){
        this.paymentModes.push(item)
      }
    })
    // Payment modes dropdown api call end

    // Payment channel dropdown api call start
    this.apiService.get('payment/'+this.utilityIdString+'/payment-channels').subscribe(data=>{
      for(let item of data){
        this.paymentChannels.push(item)
      }
    })
    // Payment channel dropdown api call end

    // Document types dropdown api call start
    this.apiService.get('utility/'+this.utilityIdString+'/document-type/list').subscribe(data=>{
      for(let item of data){
        this.documentTypes.push(item)
      }
    })
    // Document types dropdown api call end

    // Document types dropdown api call start
    this.apiService.get('utility/'+this.utilityIdString+'/document-sub-type/list').subscribe(data=>{
      for(let item of data){
        this.documentSubTypes.push(item)
      }
    })
    // Document types dropdown api call end
  }

  // Applicant details form control start
  get ad() { return this.applicantDetailsForm.controls; }
  // Applicant details form control end

  // Address details form control start
  get add() { return this.addressDetailsForm.controls; }
  // Address details form control end

  // Payment details form control start
  get pd() { return this.paymentDetailsForm.controls; }
  // Payment details form control end

  // Applicant details form submit start
  onApplicantDetailsFormSubmit() {
      this.applicantDetailsFormSubmitted = true;

      if (this.applicantDetailsForm.invalid) {
          return;
      }else{
        this.stepperFormService.sendTrigger("#applicant-pay-tab")
      }
  }
  // Applicant details form submit end

  // Address details form submit start
  onAddressDetailsFormSubmit() {
      this.addressDetailsFormSubmitted = true;

      if (this.addressDetailsForm.invalid) {
          return;
      }else{
        this.address = this.addressDetailsForm.value.addressLineControl
        this.stepperFormService.sendTrigger("#kyc-doc-tab")
      }
  }
  // Address details form submit end

  // Payment details form submit start
  onPaymentDetailsFormSubmit() {
      this.paymentDetailsFormSubmitted = true;
      console.log(this.paymentDetailsForm.value)
      if (this.paymentDetailsForm.invalid) {
          return;
      }else{
        this.stepperFormService.sendTrigger("#applicant-addr-tab")
      }
  }
  // Payment details form submit end

  // KYC details form submit start
  onKycDetailsFormSubmit() {
      for(let item of this.kycDetailsForm.value.documentsControl){
        if(item.document_sub_type_id != null && item.document_type_id != null && item.file != null){
          console.log(item)
        }
      }
  }
  // KYC details form submit end

  ngOnInit(): void {

    // Building stepper form start 
    this.sendStepperFormData()
    // Building stepper form end

    // Set cheque or dd input start
    this.paymentDetailsForm.get("paymentModeControl").valueChanges.subscribe(val=>{
      if(val.name == "Cheque/DD"){
        this.chequeDemandDraft = !this.chequeDemandDraft
      }else{
        this.chequeDemandDraft = true
      }
    })
    // Set cheque or dd input end
  }

  // Stepper form data service call start
  sendStepperFormData(){
    this.stepperFormService.stepperFormEvent.emit(this.blocks);
  }
  // Stepper form data service call end

  // Function for stepper form control start
  testing(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#applicant-dtls-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#applicant-pay-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#applicant-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#applicant-addr-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#applicant-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#applicant-pay-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#kyc-doc-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#applicant-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#applicant-pay-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#applicant-addr-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#applicant-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#applicant-pay-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#applicant-addr-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#kyc-doc-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_1").on('click', function(){
        // $('#applicant-pay-tab').trigger( "click" );
      });
      $("#proceed_2").on('click', function(){
        // $('#applicant-addr-tab').trigger( "click" );
      });
      $("#proceed_3").on('click', function(){
        // $('#kyc-doc-tab').trigger( "click" );
      });
      $("#proceed_4").on('click', function(){
        // $('#rvw-sbmt-tab').trigger( "click" );
      });
      $("#proceed_5").on('click', function(){
      });
  }
  // Function for stepper form control end

  // Function for making both the address same start
  copyAddress(){
    this.isAddressSame = !this.isAddressSame
    if(this.isAddressSame == true){
      this.addressDetailsForm.patchValue({
        billingAddressLineControl : this.addressDetailsForm.get('addressLineControl').value,
        billingStreetControl : this.addressDetailsForm.get('streetControl').value,
        billingStateProvinceRegionControl : this.addressDetailsForm.get('stateProvinceRegionControl').value,
        billingCityControl : this.addressDetailsForm.get('cityControl').value,
        billingZipCodeControl : this.addressDetailsForm.get('zipCodeControl').value,
        billingAreaControl : this.addressDetailsForm.get('areaControl').value,
        billingSubAreaControl : this.addressDetailsForm.get('subAreaControl').value,
      })
    }else{
      this.addressDetailsForm.controls.billingAddressLineControl.setValue(null)
      this.addressDetailsForm.controls.billingStreetControl.setValue(null)
      this.addressDetailsForm.controls.billingStateProvinceRegionControl.setValue(null)
      this.addressDetailsForm.controls.billingCityControl.setValue(null)
      this.addressDetailsForm.controls.billingZipCodeControl.setValue(null)
      this.addressDetailsForm.controls.billingAreaControl.setValue(null)
      this.addressDetailsForm.controls.billingSubAreaControl.setValue(null)
    }
  }
  // Function for making both the address same end

  // Function for toggling the address in review and submit start
  toggleAddress(id){
    if(id == 'service'){
      this.address = this.addressDetailsForm.get('addressLineControl').value
    }else{
      this.address = this.addressDetailsForm.get('billingAddressLineControl').value
    }
  }
  // Function for toggling the address in review and submit end

  onRegistrationSubmit(){
    this.showtoast = true;
    let data = {
      utility_id : this.applicantDetailsForm.value.utilityControl.id_string,
      first_name : this.applicantDetailsForm.value.firstNameControl,
      middle_name : this.applicantDetailsForm.value.middleNameControl,
      last_name : this.applicantDetailsForm.value.lastNameControl,
      email_id : this.applicantDetailsForm.value.emailControl,
      phone_mobile : this.applicantDetailsForm.value.mobileNoControl,
      address_line_1 : this.addressDetailsForm.value.addressLineControl,
      street : this.addressDetailsForm.value.streetControl,
      zipcode : this.addressDetailsForm.value.zipCodeControl,
      state_id : this.addressDetailsForm.value.stateProvinceRegionControl.id_string,
      city_id : this.addressDetailsForm.value.cityControl.id_string,
      area_id : this.addressDetailsForm.value.areaControl.id_string,
      sub_area_id : this.addressDetailsForm.value.subAreaControl.id_string,
      billing_address_line_1 : this.addressDetailsForm.value.billingAddressLineControl,
      billing_street : this.addressDetailsForm.value.billingStreetControl,
      billing_zipcode : this.addressDetailsForm.value.billingZipCodeControl,
      billing_state_id : this.addressDetailsForm.value.billingStateProvinceRegionControl.id_string,
      billing_city_id : this.addressDetailsForm.value.billingCityControl.id_string,
      billing_area_id : this.addressDetailsForm.value.billingAreaControl.id_string,
      billing_sub_area_id : this.addressDetailsForm.value.billingSubAreaControl.id_string,
      ownership_id : this.applicantDetailsForm.value.ownershipControl.id_string,
      consumer_category_id : this.applicantDetailsForm.value.consumerCategoryControl.id_string,
      sub_category_id : this.applicantDetailsForm.value.consumerSubCategoryControl.id_string,
      is_vip : this.applicantDetailsForm.value.vipControl.id,
      connectivity : this.applicantDetailsForm.value.connectivityControl.id,
      transactions : this.paymentDetailsForm.value.transactionsControl,
      payment : {
        utility_id : this.applicantDetailsForm.value.utilityControl.id_string,
        payment_type_id : this.paymentDetailsForm.value.paymentTypeControl,
        payment_mode_id : this.paymentDetailsForm.value.paymentModeControl.id_string,
        payment_channel_id : this.paymentDetailsForm.value.paymentChannelControl,
        transaction_id : this.paymentDetailsForm.value.transactionIdControl,
        transaction_amount : this.paymentDetailsForm.value.paymentAmountControl,
        cheque_dd_no : this.paymentDetailsForm.value.chequeDdControl,
        // transaction_date : this.paymentDetailsForm.value.transationDateControl
      }
    }
    this.apiService.post('registration/', data).subscribe(data=>{
      console.log(data)
    })
  }

  get Transactions() {
    return this.paymentDetailsForm.get('transactionsControl') as FormArray;
  }

  get Documents() {
    return this.kycDetailsForm.get('documentsControl') as FormArray;
  }

  addTransactionRow(){
    this.Transactions.push(this.formBuilder.group({transaction_type_id:[null], transaction_sub_type_id:[null], transaction_amount:[null], tax_amount:[null]}));
  }

  removeTransactionRow(index){
    if (index != 0){
      this.Transactions.removeAt(index); 
    }else{
      return false
    }
  }

  addDocumentRow(){
    this.Documents.push(this.formBuilder.group({document_type_id:[null], document_sub_type_id:[null], file:[null]}));
  }

  removeDocumentRow(index){
    if (index != 0){
      this.Documents.removeAt(index); 
    }else{
      return false
    }
  }

  setPaymentAmount(){
    let amount : number = 0
    for (let item of this.paymentDetailsForm.value.transactionsControl){
      if(item.transaction_amount != null && item.tax_amount != null){
        amount = amount + Number(item.transaction_amount)
      }
    }
    this.paymentDetailsForm.controls.paymentAmountControl.setValue(amount)
  }

}
