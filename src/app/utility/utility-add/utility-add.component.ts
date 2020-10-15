import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { StepperFormService } from '../../common/stepper-form/stepper-form.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { UtilityService } from '../utility.service';
import { SessionService } from 'src/app/common-services/session-service/session.service';

@Component({
  selector: 'app-utility-add',
  templateUrl: './utility-add.component.html',
  styleUrls: ['./utility-add.component.scss']
})
export class UtilityAddComponent implements OnInit {

  firstName = ''; 
  middleName = ''; 
  lastName = ''; 
  mobileNo = ''; 
  email = ''; 
  name = ''; 

  

  // toaster
  showtoast = false; 
  autohide = true;
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  textValue = 'Thomas Shelby';

  model: NgbDateStruct;
  date: {day: number, year: number, month: string}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPlus = faPlus;

  public applicantDetailsCollapse = false;
  public applicantPayCollapse = true;
  public applicantAddrsCollapse = true;
  public applicantKycCollapse = true;

  selectedUtility: any;
  selectedDocument: any;
  selectedConsumerCategory: any;
  selectedConsumerSubCategory: any;
  selectedVip: string[];
  selectedPipeline: string[];
  selectedPaymentType: any;
  selectedPaymentType2: any;
  selectedPaymentType3: any;
  Selectedregion:any;
  Selectedcountry:any;
  Selectedstate:any;
  Selectedcity:any;
  selectedScheme: any;
  selectedScheme2: any;
  selectedPaymentMode: any;
  selectedPaymentMode2: any;
  selectedStateProvince: any;
  selectedZipCode: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedBillingAddress: any;
  selectedBillingCity: any;
  selectedBillingZipCode: any;
  selectedBillingArea: any;
  selectedBillingSubArea: any;
  selectedDocumentType = 'Personal details';
  selectedKycDocuments = 'Pancard';
  
  changeFn(val){
    console.log(val);
  }
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
  vip =  [
    {id: 1, name: 'Yes'},
    {id: 2, name: 'No'},
  ];
  pipeline = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  SelectedpaymentType:any;
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
  state= [
    {id: 1, name: 'State 1'},
    {id: 2, name: 'State 2'},
    {id: 3, name: 'State 3'},
  ]; 
  country= [
    {id: 1, name: 'Country 1'},
    {id: 2, name: 'Country 2'},
    {id: 3, name: 'Country 3'},
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
    {id: 1, name: 'Pancard'},
    {id: 2, name: 'Energy Bill'},
    {id: 3, name: 'Aadhaar Card'},
  ];
  selectedMeterType:any;
  metertype = [
    {id: 1, name: 'Smart Meter'},
  ];

  selectedMeterStatus:any;
  meterstatus = [
    {id: 1, name: 'Installed'},
    {id: 2, name: 'Not Started'},
  ];

  selectedConsumerRoute:any;
  route = [
    {id: 3, name: '101'},
    {id: 4, name: '102'},
    {id: 5, name: '103'},
  ];

  selectedCycle:any;
  billCycle = [
    {id: 3, name: '01'},
    {id: 4, name: '02'},
    {id: 5, name: '03'},
  ];

  region = [
    {id: 3, name: 'region 1'},
    {id: 4, name: 'region 2'},
    {id: 5, name: 'region 3'},
  ];
  
  selectedSubModule: any;
  subModule = [
    {id: 1, submodul: 'Option 1'},
    {id: 2, submodul: 'Option 2'},
    {id: 3, submodul: 'Option 3'},
  ];
  selectedProduct: any;
  product = [
    {id: 1, prod: 'Option 1'},
    {id: 2, prod: 'Option 2'},
    {id: 3, prod: 'Option 3'},
  ];
  selectedConsumerCat: any;
  consumerCat = [
    {id: 1, conscat: 'Option 1'},
    {id: 2, conscat: 'Option 2'},
    {id: 3, conscat: 'Option 3'},
  ];
  selectedSubConsumerCat: any;
  subConsumerCat = [
    {id: 1, subconscat: 'Option 1'},
    {id: 2, subconscat: 'Option 2'},
    {id: 3, subconscat: 'Option 3'},
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
  
  // toaster


  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});

  blocks = [
    {
      name : 'Utility',
      id : 'utility-dtls-tab',
      href : '#utility-dtls',
      class : 'nav-link active',
      areaControl : 'utility-dtls',
      listClass : 'nav-item list-group-item active'
    },
    {
      name : 'Module',
      id : 'module-dtl-tab',
      href : '#module-dtl',
      class : 'nav-link',
      areaControl : 'module-dtl',
      listClass : 'nav-item list-group-item'
    },
    {
      name : 'Product',
      id : 'product-dtl-tab',
      href : '#product-dtl',
      class : 'nav-link',
      areaControl : 'product-dtl',
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

  uitilityDetailsForm: FormGroup; 
  uitilityDetailsFormSubmitted = false;
  moduleDetailsForm: FormGroup;
  moduleDetailsFormSubmitted = false;
  productDetailsForm: FormGroup;
  productDetailsFormSubmitted = false;
  consumerDetailsForm: FormGroup;
  consumerDetailsFormSubmitted = false;

  constructor(private stepperFormService:StepperFormService,private formBuilder: FormBuilder,private utilityService:UtilityService,private sessionService:SessionService) { 
    // Utility details form code start
    this.uitilityDetailsForm = this.formBuilder.group({
      tenentNameControl: [null, [Validators.required]],
      uitilityNameControl: ['', [Validators.required]],
      utilitySortNameControl: ['', [Validators.required]],
      regionControl: [null, [Validators.required]],
      countryControl: [null, [Validators.required]],
    });

    // Module details form code start
    this.moduleDetailsForm = this.formBuilder.group({
        moduleDivControl: this.formBuilder.array(
        [this.formBuilder.group({moduleControl:[null], subModuleControl:[null]})]
        )
    });
    // Module details form code end

      // Product details form code start
      this.productDetailsForm = this.formBuilder.group({
        productDivControl: this.formBuilder.array(
          [this.formBuilder.group({productControl:[null]})]
          )
       })
  }

  // Uitility details form control start
  get ud() { return this.uitilityDetailsForm.controls; }
  // Uitility details form control end

  // module details form control start
  get md() { return this.moduleDetailsForm.controls; }
  // module details form control end

  // product details form control start
  get pd() { return this.productDetailsForm.controls; }
  // product details form control end

  // product details form control start
  get cd() { return this.consumerDetailsForm.controls; }
  // product details form control end

  onUtilityDetailsFormSubmit(){
    this.uitilityDetailsFormSubmitted = true;
    if (this.uitilityDetailsForm.invalid) {
      return;
    }else{
      this.stepperFormService.sendTrigger("#module-dtl-tab")
    }
  }

  onModuleDetailsFormSubmit(){
    this.moduleDetailsFormSubmitted = true
    if (this.moduleDetailsForm.invalid) {
      return;
    }else{
      this.stepperFormService.sendTrigger("#product-dtl-tab")
    }
  }

  onProductDetailsFormSubmit(){
    this.productDetailsFormSubmitted = true
    if (this.productDetailsForm.invalid) {
      return;
    }else{
      this.stepperFormService.sendTrigger("#rvw-sbmt-tab")
    }
  }

  tenantName;
  utilityName;
  shortName;  
  
  moduleList1:any=[];
  countriesList;
  regionsList;
  stateList;
  citiesList;
  submodulesList;
  productsList;
  categoryList;
  tenantList;

  ngOnInit(): void {

    this.sendStepperFormData()   
    
    
    this.utilityService.getCountriesListData().subscribe(countries=>{
      this.countriesList = countries.results
    })
    this.utilityService.getRegionsListData().subscribe(regions=>{
      this.regionsList = regions.results
    })
    this.utilityService.getProductListData().subscribe(products=>{
      this.productsList = products.results
    })
    this.utilityService.getTenantListData().subscribe(tenants=>{
      this.tenantList = tenants.results
    })
    
  }

  // According to tenant idstring featch module list from tenantmodule
  tenant_id_string;
  moduleList=[];
  submoduleList;
  submoduleList1;
    getTenantIdString(){            
      this.tenant_id_string = this.uitilityDetailsForm.value.tenentNameControl.id_string
      this.utilityService.getModuleListData(this.tenant_id_string).subscribe(modules=>{
        this.moduleList=[]
        for(let module of modules.results){
          this.moduleList.push({"id_string":module.id_string,"name":module.module_id.name})
          }
      })
    }

    // According to module idstring featch submodule list from tenantsubmodule
    module;
    getModuleId(id){
      this.module = this.Transactions.at(id).get('moduleControl').value.id_string
      this.utilityService.getSubModuleListData(this.module).subscribe(submodules=>{
        if(submodules.results != ''){
            this.submoduleList1=[];
          for(let submodule of submodules.results){
            this.submoduleList1.push({"id_string":submodule.id_string,"name":submodule.sub_module_id.name})
          }
          this.submoduleList = this.submoduleList1
        }else{
        this.submoduleList = []
        }
      })
    }


  sendStepperFormData(){
    this.stepperFormService.stepperFormEvent.emit(this.blocks);
  }

  testing(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#utility-dtls-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#module-dtl-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#utility-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#product-dtl-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#utility-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#module-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#consumer-dtl-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#utility-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#module-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#product-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#utility-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#module-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#product-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#consumer-dtl-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_1").on('click', function(){
        // $('#applicnt-pay-tab').trigger( "click" );
      });
      $("#proceed_2").on('click', function(){
        // $('#applicnt-addr-tab').trigger( "click" );
      });
      $("#proceed_3").on('click', function(){
        // $('#kyc-doc-tab').trigger( "click" );
      });
      $("#proceed_4").on('click', function(){
        // $('#rvw-sbmt-tab').trigger( "click" );
      });
      $("#proceed_5").on('click', function(){
        // console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);  
    }

    onUtilitySubmit(){
      this.showtoast = true;

      let data = {
        tenant : this.uitilityDetailsForm.value.tenentNameControl.name,
        name : this.uitilityDetailsForm.value.uitilityNameControl,
        short_name : this.uitilityDetailsForm.value.utilitySortNameControl,
        module : this.moduleDetailsForm.value.moduleControl.name,
        // submodule : this.moduleDetailsForm.value.submoduleControl.name
      }
      this.utilityService.addUtility(data).subscribe(result=>{
        if(result.state === 'success'){

        }

      })
    }
    
    get Transactions() {
      return this.moduleDetailsForm.get('moduleDivControl') as FormArray;
    }  
    addModulesRow(){
      this.Transactions.push(this.formBuilder.group({moduleControl:[null], subModuleControl:[null]}));
    }    
    removeTransactionRow(index){
      if (index != 0){
        this.Transactions.removeAt(index); 
      }else{
        return false
      }
    }

    get Product() {
      return this.productDetailsForm.get('productDivControl') as FormArray;
    }  
    addProductRow(){
      this.Product.push(this.formBuilder.group({productControl:[null]}));
    }
    removeProductRow(index){
      if (index != 0){
        this.Product.removeAt(index); 
      }else{
        return false
      }
    }
}
