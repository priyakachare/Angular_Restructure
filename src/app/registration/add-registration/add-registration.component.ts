import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StepperFormService } from '../../common/stepper-form/stepper-form.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { RegistrationService } from '../registration.service';
declare var $ : any;

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

  applicantDetailsForm: FormGroup;
  applicantDetailsFormSubmitted = false;
  addressDetailsForm: FormGroup;
  addressDetailsFormSubmitted = false;
  paymentDetailsForm: FormGroup;
  paymentDetailsFormSubmitted = false;
  showtoast = false; 
  autohide = true;
  isAddressSame = false;
  address = "A504, Prime Heights, Sus road, Pashan, Pune 421005"
  textValue = 'Thomas Shelby';
  model: any;
  date: {day: number, year: number, month: string};
  faCalendarAlt = faCalendarAlt;
  faTrash = faTrash;
  selectedDocument: any;
  selectedPipeline: string[];
  selectedPaymentType: any;
  selectedPaymentType2: any;
  selectedPaymentType3: any;
  selectedScheme: any;
  selectedScheme2: any;
  selectedPaymentMode: any;
  selectedPaymentMode2: any;
  selectedDocumentType = 'Personal details';
  selectedKycDocuments = 'Pancard';

  document = [
    {id: 1, name: 'Document 1'},
    {id: 2, name: 'Document 2'},
  ];
  consumerCategories : any[] = [
    {id: 1, name: 'Consumer Category 1'},
    {id: 2, name: 'Consumer Category 2'},
  ];
  consumerSubCategory = [
    {id: 1, name: 'Consumer SubCategory 1'},
    {id: 2, name: 'Consumer SubCategory 2'},
  ];
  Ownership = [
    {id: 1, name: 'Ownership 1'},
    {id: 2, name: 'Ownership 2'},
  ];
  vip =  [
    {id: 'True', name: 'Yes'},
    {id: 'False', name: 'No'},
  ];
  connectivity = [
    {id: 'True', name: 'Yes'},
    {id: 'False', name: 'No'},
  ];

  paymentType = [
    {id: 1, name: 'Payment Type 1'},
    {id: 2, name: 'Payment Type 2'},
    {id: 3, name: 'Payment Type 3'},
  ];
  paymentType2 = [
    {id: 1, name: 'Payment Type 1'},
    {id: 2, name: 'Payment Type 2'},
    {id: 3, name: 'Payment Type 3'},
  ];
  paymentType3 = [
    {id: 1, name: 'Payment Type 1'},
    {id: 2, name: 'Payment Type 2'},
    {id: 3, name: 'Payment Type 3'},
  ];
  scheme= [
    {id: 1, name: 'Scheme 1'},
    {id: 2, name: 'Scheme 2'},
    {id: 3, name: 'Scheme 3'},
  ];
  scheme2= [
    {id: 1, name: 'Scheme 1'},
    {id: 2, name: 'Scheme 2'},
    {id: 3, name: 'Scheme 3'},
  ];
  paymentMode= [
    {id: 1, name: 'Payment Mode 1'},
    {id: 2, name: 'Payment Mode 2'},
    {id: 3, name: 'Payment Mode 3'},
  ];
  stateProvince= [
    {id: 'afa-342', name: 'Texas'},
    {id: 2, name: 'New Jersey'},
    {id: 3, name: 'Alaska'},
  ];
  billingAddress= [
    {id: 1, name: 'Chicago'},
    {id: 2, name: 'Los Angeles'},
    {id: 3, name: 'Boston'},
  ];
  city= [
    {id: 1, name: 'Chicago'},
    {id: 2, name: 'Los Angeles'},
    {id: 3, name: 'Boston'},
  ];
  billingCity= [
    {id: 1, name: 'Chicago'},
    {id: 2, name: 'Los Angeles'},
    {id: 3, name: 'Boston'},
  ];
  zipCode= [
    {id: 1, name: '99501'},
    {id: 2, name: '85001'},
    {id: 3, name: '72201'},
  ];
  billingZipCode= [
    {id: 1, name: '99501'},
    {id: 2, name: '85001'},
    {id: 3, name: '72201'},
  ];
  area= [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
    {id: 3, name: 'Area 3'},
  ];
  billingArea= [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
    {id: 3, name: 'Area 3'},
  ];
  subArea= [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
    {id: 3, name: 'Sub Area 3'},
  ]; 
  billingSubArea= [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
    {id: 3, name: 'Sub Area 3'},
  ]; 

  documentType= [
    {id: 1, name2: 'Personal details'},
    {id: 2, name2: 'Address details'},
  ];
  kycDocument= [
    {id: 3, name: 'Pancard'},
    {id: 4, name: 'Energy Bill'},
    {id: 5, name: 'Aadhaar Card'},
  ];

  files: File[] = [];
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});

  constructor(private stepperFormService:StepperFormService, private formBuilder: FormBuilder, 
    private registrationService : RegistrationService) {

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
    this.applicantDetailsForm.controls.utilityControl.setValue({id:"57ed8a45-014a-4f72-826a-dcf6824c454e", name:"MNGL Pune"})
    // Applicant details form code start

    // Payment details form code start
    this.paymentDetailsForm = this.formBuilder.group({
      firstNameControl: ['', [Validators.required]],
    });
    // Payment details form code end

    // Address details form code start
    this.addressDetailsForm = this.formBuilder.group({
      addressLineControl: ['', [Validators.required]],
      streetControl: ['', [Validators.required]],
      stateProvinceRegionControl: [null, [Validators.required]],
      cityControl: [null, [Validators.required]],
      zipCodeControl: [null, [Validators.required]],
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
        this.stepperFormService.sendTrigger("#kyc-doc-tab")
      }
  }
  // Address details form submit end

  // Payment details form submit start
  onPaymentDetailsFormSubmit() {
      this.paymentDetailsFormSubmitted = true;

      if (this.paymentDetailsForm.invalid) {
          return;
      }else{
        this.stepperFormService.sendTrigger("#applicant-addr-tab")
      }
  }
  // Payment details form submit end

  ngOnInit(): void {
    this.sendStepperFormData()
  }

  sendStepperFormData(){
    this.stepperFormService.stepperFormEvent.emit(this.blocks);
  }

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
        console.log("end-of-form");
      });
  }

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

  toggleAddress(id){
    if(id == 'service'){
      this.address = this.addressDetailsForm.get('addressLineControl').value
    }else{
      this.address = this.addressDetailsForm.get('billingAddressLineControl').value
    }
  }

  onRegistrationSubmit(){
    this.showtoast = true;
    console.log(this.applicantDetailsForm.value)
    console.log(this.addressDetailsForm.value)
    let data = {
      utility_id : this.applicantDetailsForm.value.utilityControl.id,
      first_name : this.applicantDetailsForm.value.firstNameControl,
      middle_name : this.applicantDetailsForm.value.middleNameControl,
      last_name : this.applicantDetailsForm.value.lastNameControl,
      email_id : this.applicantDetailsForm.value.emailControl,
      phone_mobile : this.applicantDetailsForm.value.mobileNoControl,
      address_line_1 : this.addressDetailsForm.value.addressLineControl,
      street : this.addressDetailsForm.value.streetControl,
      zipcode : this.addressDetailsForm.value.zipCodeControl.name,
      // state_id : 
      // city_id : 
      // area_id : 
      // sub_area_id : 
      // ownership_id : 
      // consumer_category_id : 
      // sub_category_id : 
      is_vip : this.applicantDetailsForm.value.vipControl.id,
      connectivity : this.applicantDetailsForm.value.connectivityControl.id,
    }
    this.registrationService.addRegistration(data).subscribe(data=>{
      console.log(data)
    })
  }

}
