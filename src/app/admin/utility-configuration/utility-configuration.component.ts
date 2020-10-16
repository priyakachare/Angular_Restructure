import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utility-configuration',
  templateUrl: './utility-configuration.component.html',
  styleUrls: ['./utility-configuration.component.scss']
})
export class UtilityConfigurationComponent implements OnInit {
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  model3: NgbDateStruct;
  model4: NgbDateStruct;
  date: { year: number, month: number};
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faTimesCircle = faTimesCircle;
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  
  selectedDepartment: any = "";
  department = [
    {id: 1, name: 'Territory'},
    {id: 2, name: 'Num Format'},
    {id: 3, name: 'Role'},
    {id: 4, name: 'User'},
    {id: 5, name: 'Campaign'},
    {id: 6, name: 'Survey'},
    {id: 7, name: 'Registration'},
    {id: 8, name: 'Consumers'},
    {id: 9, name: 'Meter Data'},
    {id: 10, name: 'Billing'},
    {id: 11, name: 'Payments'},
    {id: 12, name: 'Service Requests'},
    {id: 13, name: 'Complaints'}
  ];

  selectedDepartment1: any = "";
  department1 = [
    {id: 1, name1: 'Work Orders'},
    {id: 2, name1: 'Contracts'},
    {id: 3, name1: 'Suppliers'},
    {id: 4, name1: 'Store'},
    {id: 5, name1: 'Asset'},
  ];

  selectedDepartment2: any = "";
  department2 = [
    {id: 1, name2: 'Products'},
    {id: 2, name2: 'Services'},
    {id: 3, name2: 'Tenders'},
    {id: 4, name2: 'Orders'},
    {id: 5, name2: 'HCM'},
    {id: 6, name2: 'Finance'},
  ];

  selectedCompany: any
  company = [
    {id: 1, name: 'Company 1'},
    {id: 2, name: 'Company 2'},
    {id: 3, name: 'Company 3'}
  ]

  selectFilterStatus: any
  filterStatus = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
    {id: 3, name: 'status 3'}

  ]

  selectFilterDepartment: any
  filterDepartment = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'Marketing'},
    {id: 3, name: 'Billing'}

  ]

  selectedsubtype:any
  subtype = [
  {id: 1, name: 'Type 1'},
  {id: 2, name: 'Type 2'},
  ];

  activated=""
  isactive = [
  {id: 1, name: 'Yes'},
  {id: 2, name: 'No'},  
  ];

  selectedStatus: any = "";
  status = [
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Advance'},
    {id: 3, name: 'Enterprise'}
  ];

  selectedPagination:any;
  pagination = [
  {id: 1, name: '10'},
  {id: 2, name: '20'},
  ];

  selectedPayChannel = '';
  payChannel = [
  {id: 1, paychnl: 'Channel 1'},
  {id: 2, paychnl: 'Channel 2'},
  {id: 3, paychnl: 'Channel 3'},  
  ];
  selectedPayType = 'Refund';
  payType = [
  {id: 1, paytp: 'Subscription'},
  {id: 2, paytp: 'Refund'},
  ];

  selectedMonth = '';
  month = [
  {id: 1, name: 'Jan'},
  {id: 2, name: 'Feb'},
  {id: 3, name: 'March'},  
  ];

  selectedRegion = '';
  region1 = [
  {id: 1, name: 'America'},
  {id: 2, name: 'Asia'},
  {id: 3, name: 'Africa'},  
  ];

  selectedCountry = '';
  country1 = [
  {id: 1, name: 'USA'},  
  ];

  selectedState = '';
  state1 = [
  {id: 1, name: 'Texas'},
  {id: 2, name: 'Florida'},
  {id: 3, name: 'Michigan'},  
  ];

  selectedCity = '';
  city1 = [
  {id: 1, name: 'Houston'},
  {id: 2, name: 'New York'},
  {id: 3, name: 'Austin'},  
  ];

  selectedSection = '';
  section1 = [
  {id: 1, name: 'Queens'},
  {id: 2, name: 'Brookyn'},
  {id: 3, name: 'Manhatten'},  
  ];

  selectedArea = '';
  area1 = [
  {id: 1, name: 'Rossville'},
  {id: 2, name: 'Queens village'},  
  ];

  selectedSubArea = '';
  subarea1 = [
  {id: 1, name: 'Murdock'},
  {id: 2, name: 'Jamaica Ave'},  
  ];

  formFactor= [
    {id: 1, name: 'Mobile'},
    {id: 2, name: 'Web'},
  ];
  role= [
    {id: 1, name: 'Marketing Manager'},
    {id: 2, name: 'Vendor'},
    {id: 3, name: 'Supervisor'},
  ];
  documentType= [
    {id: 1, name: 'Personal ID'},
    {id: 2, name: 'Address Proof'},
    {id: 3, name: 'Bank Passbook'},
  ];
  utility= [
    {id: 1, name: 'Utility  1'},
    {id: 2, name: 'Utility  2'},
    {id: 3, name: 'Utility  3'},
  ];
 
  selectedStatus1: 'View';
  status1 = [
    {id: 1, status1: 'View'},
    {id: 2, status1: 'Edit'},
  ];

  selectedStatus2: 'View';
  status2 = [
    {id: 1, status2: 'View'},
    {id: 2, status2: 'Edit'},
  ];

  selectedStatus3: 'View';
  status3 = [
    {id: 1, status3: 'View'},
    {id: 2, status3: 'Edit'},
  ];

  selectedStatus4: 'View';
  status4 = [
    {id: 1, status4: 'View'},
    {id: 2, status4: 'Edit'},
  ];

  selectedStatus5: 'View';
  status5 = [
    {id: 1, status5: 'View'},
    {id: 2, status5: 'Edit'},
  ];

  selectedViewRegister: any;
  register = [
    {id: 1, register: 'View'},
    {id: 2, register: 'Edit'},
  ];

  selectedViewConsumer: any;
  consumer = [
    {id: 1, consumer: 'View'},
    {id: 2, consumer: 'Edit'},
  ];

  selectedViewCampaign: any;
  campaign = [
    {id: 1, campaign: 'View'},
    {id: 2, campaign: 'Edit'},
  ];

  selectedViewSurvey: any;
  survey = [
    {id: 1, survey: 'View'},
    {id: 2, survey: 'Edit'},
  ];

  selectedViewUser: any;
  user = [
    {id: 1, user: 'View'},
    {id: 2, user: 'Edit'},
  ];

  role1= [
    {id: 1, name: 'S & M'},
    {id: 2, name: 'Consumer Ops'},
    {id: 3, name: 'Consumer Care'},
  ];

  type= [
    {id: 1, name: 'Utility'},
    {id: 2, name: 'Operator'},
    
  ];
  subType= [
    {id: 1, name: 'Employee'},
    {id: 2, name: 'Vendor'},
  ];

  dept= [
    {id: 1, name: 'Sales & Marketing'},
    {id: 2, name: 'Finance'},
  ];

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  dtOptions2 = {}
  collection = { count: 12, data: [] };

  constructor( private router: Router, private fb: FormBuilder ){ 
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId_start: i + 1000,
          billId_current: i + 1020,
          role_name:['Admin','CEO','Back Office','HOD'].sort((a, b) => .5 - Math.random())[0],
          role_type:['Operator','Utility'].sort((a, b) => .5 - Math.random())[0],
          role_subtype:['Employee','Vendor','Supplier'].sort((a, b) => .5 - Math.random())[0],
          role_form:['Web','Mobile'].sort((a, b) => .5 - Math.random())[0],
          role_dept:['Sales & Marketing','Finance'].sort((a, b) => .5 - Math.random())[0],
          role_status:['Active', 'Inactive'].sort((a, b) => .5 - Math.random())[0],
          region: ['America'],
          country: ['USA','Mexico'].sort((a, b) => .5 - Math.random())[0],
          state: ['Texas','Florida','Michigan'].sort((a, b) => .5 - Math.random())[0],
          section: ['Queens','Brookyn','Staten Island','Manhatten'].sort((a, b) => .5 - Math.random())[0],
          city: ['New York','Washington D.C.','Houston','Austin'].sort((a, b) => .5 - Math.random())[0],
          area: ['Ridgewood','Queens villege','Brownsville','Rossville'].sort((a, b) => .5 - Math.random())[0],
          subarea: ['Murdock','Hempstead Ave','93rd Ave','Jamaica Ave'].sort((a, b) => .5 - Math.random())[0],
          status: ['active', 'inactive'].sort((a, b) => .5 - Math.random())[0],
          utility: ['Infra mark'],
          skill: ['Meter Reading','Installation'].sort((a, b) => .5 - Math.random())[0],
          channel: ['PayTm','Phonpe','Google Pay','PayU'].sort((a, b) => .5 - Math.random())[0],
          mode: ['Cash','Digital','Cheque','DD'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          created_by:'Admin',
          module:['Registration'],
          format:['INFRA,BEECH'].sort((a, b) => .5 - Math.random())[0],
          prefix:['Yes'].sort((a, b) => .5 - Math.random())[0],
          billAmount:500,
          description:['Lorem ipsum'],
          tender_name:'Tender Name ' + i,
          contract_name:'Contract Name ' + i,
          provider:'provider '+i,
          services:'service '+i,
          frequency:'frequency '+i,
          date: new Date(),
        }
      );
     
    this.dtOptions2 = {
      pageLength: 12,
    };
    }

    
    }

  ngOnInit(): void {
    this.selectedStatus = this.status[0]
    this.selectedDepartment = this.department[0]
    this.selectedDepartment1 = this.department1[0]
    this.selectedDepartment2 = this.department2[0]
    this.selectedViewRegister = this.register[0]
    this.selectedViewConsumer = this.consumer[0]
    this.selectedViewCampaign = this.campaign[0]
    this.selectedViewSurvey = this.survey[0]
    this.selectedViewUser = this.user[0]

  }

}
