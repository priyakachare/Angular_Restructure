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

  showtoast = false; 
  autohide = true;
  textValue = 'Thomas Shelby';
  model: any;
  date: {day: number, year: number, month: string};
  faCalendarAlt = faCalendarAlt;
  faTrash = faTrash;
  selectedUtility: any;
  selectedDocument: any;
  selectedConsumerCategory: any;
  selectedConsumerSubCategory: any;
  selectedVip: string[];
  selectedPipeline: string[];
  selectedPaymentType: any;
  selectedPaymentType2: any;
  selectedPaymentType3: any;
  selectedScheme: any;
  selectedScheme2: any;
  selectedPaymentMode: any;
  selectedPaymentMode2: any;
  selectedStateProvince: any;
  selectedCity: any;
  selectedZipCode: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedBillingAddress: any;
  selectedBillingCity: any;
  selectedBillingZipCode: any;
  selectedBillingArea: any;
  selectedBillingSubArea: any;
  selectedOwnership: any;
  selectedDocumentType = 'Personal details';
  selectedKycDocuments = 'Pancard';
  firstName = 'Rohan'; 
  middleName = ''; 
  lastName = ''; 
  mobileNo = ''; 
  email = ''; 
  name = '';

  utility = [
    {id: 1, utilityName: 'Utility 1'},
    {id: 2, utilityName: 'Utility 2'},
  ];
  document = [
    {id: 1, name: 'Document 1'},
    {id: 2, name: 'Document 2'},
  ];
  consumerCategory = [
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
    {id: 1, name: 'Yes'},
    {id: 2, name: 'No'},
  ];
  pipeline = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
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
    {id: 1, name: 'Texas'},
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

  constructor(private stepperFormService:StepperFormService) { }

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
        $('#applicant-pay-tab').trigger( "click" );
      });
      $("#proceed_2").on('click', function(){
        $('#applicant-addr-tab').trigger( "click" );
      });
      $("#proceed_3").on('click', function(){
        $('#kyc-doc-tab').trigger( "click" );
      });
      $("#proceed_4").on('click', function(){
        $('#rvw-sbmt-tab').trigger( "click" );
      });
      $("#proceed_5").on('click', function(){
        console.log("end-of-form");
      });
  }



}
