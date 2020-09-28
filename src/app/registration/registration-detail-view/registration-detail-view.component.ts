import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-detail-view',
  templateUrl: './registration-detail-view.component.html',
  styleUrls: ['./registration-detail-view.component.scss']
})
export class RegistrationDetailViewComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faMapMarkerAlt = faMapMarkerAlt;
  faPlus = faPlus;
  faPrint = faPrint;
  createdDate = false;

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

  // Data for next previous button start
  buttons = [
  	{
  		name : 'Previous',
  		listClass : 'page-item disabled',
  		icon : this.faChevronLeft,
  		href : ''
  	},
  	{
  		name : 'Next',
  		listClass : 'page-item',
  		icon : this.faChevronRight,
  		href : ''
  	}
  ]
  // Data for next previous button end

  // Data for address details start
  address = []
  // Data for address details end

  // Data for kyc details start
  kycDocs = [
  	{
  		name : 'Pan card',
  		doc : '../../assets/images/upload1.jpg'
  	},
  	{
  		name : 'Energy bill',
  		doc : './../assets/images/upload2.jpg'
  	}
  ]
  // Data for kyc details end

  // Data for payment details start
  static = {
    type : 'Registration fee',
    date : '09 Jan 2020',
    amount : 3000,
    mode : 'Online',
    id : 'TXN0035600'
  }

  paymentData = [
    {
      type : 'Deposite',
      amount : 1500.00
    },
    {
      type : 'Rental',
      amount : 1000.00
    },
    {
      type : 'Processing fee',
      amount : 100.00
    },
  ]
  // Data for payment details end

  // Data for payment details start
  notes = [
    {
      title : 'Payment Cash',
      text : 'Payment in cash will be accepted at Water Plant, Road No.2, R.T.C Colony (Land mark: Opp to IOCL Petrol Bunk)',
      dateRange : '16-09-2019 to 18-09-2019',
      time : '10:00AM & 2:30PM only',
      user : 'John Doe',
      date : '09 Jan 2020'
    },
    {
      title : 'Payment Cash',
      text : 'Payment in cash will be accepted at Water Plant, Road No.2, R.T.C Colony (Land mark: Opp to IOCL Petrol Bunk)',
      dateRange : '16-09-2019 to 18-09-2019',
      time : '10:00AM & 2:30PM only',
      user : 'John Doe',
      date : '09 Jan 2020'
    },
  ]
  // Data for payment details end

  // Data for timeline details start
  timeLine = [
    {
      date : 'MAR 18',
      title : 'Registration Approved',
      time : '3:34pm',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim explicari, quod quaeritur'
    },
    {
      date : 'MAR 20',
      title : 'Registration Hold',
      time : '3:36pm',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim explicari, quod quaeritur'
    },
    {
      date : 'MAR 21',
      title : 'Registration Approved',
      time : '3:39pm',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim explicari, quod quaeritur'
    },
    {
      date : 'MAR 23',
      title : 'Registration Rejected',
      time : '3:39pm',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim explicari, quod quaeritur'
    },
  ]
  // Data for timeline details end

  // Data for tabs start
  tabList = [
    {
      name : 'Address Detail',
      class : 'nav-item nav-link st active',
      id : 'nav-addr-dtls-tab',
      href : '#nav-addr-dtls',
      ariaControls : "nav-addr-dtls",
      ariaSelected : "true"
    },
    {
      name : 'KYC',
      class : 'nav-item nav-link st',
      id : 'nav-kyc-tab',
      href : '#nav-kyc',
      ariaControls : "nav-kyc",
      ariaSelected : "false"
    },
    {
      name : 'Payment',
      class : 'nav-item nav-link st',
      id : 'nav-paymnt-tab',
      href : '#nav-paymnt',
      ariaControls : "nav-paymnt",
      ariaSelected : "false"
    },
    {
      name : 'Note',
      class : 'nav-item nav-link st',
      id : 'nav-notes-tab',
      href : '#nav-notes',
      ariaControls : "nav-notes",
      ariaSelected : "false"
    },
    {
      name : 'Timeline',
      class : 'nav-item nav-link st',
      id : 'nav-timeline-tab',
      href : '#nav-timeline',
      ariaControls : "nav-timeline",
      ariaSelected : "false"
    },
  ]
  // Data for tabs end

  // Data for registration detail start
  regDetails = {
    static : {},
    summery : [],
    profile : []
  }
  // Data for registration detail end

  idString : any;

  constructor(private route : ActivatedRoute, private registrationService : RegistrationService) {

    this.route.params.subscribe(params => {
      this.idString = params.id
    });

    this.registrationService.getRegistrationDetails(this.idString).subscribe(data=>{
      console.log(data.result)
      this.regDetails.static['first_name'] = data['result']['first_name']
      this.regDetails.static['last_name'] = data['result']['last_name']
      this.regDetails.static['state'] = data['result']['state']
      this.regDetails.static['phone_mobile'] = data['result']['phone_mobile']
      this.regDetails.static['registration_no'] = data['result']['registration_no']
      this.regDetails.static['utility'] = data['result']['utility']
      
      for(let key of Object.keys(data.result)){

        if (key == 'category') {
          this.regDetails.profile.push({
            name : 'Category',
            value : data['result']['category']['name']
          })
        }
        if (key == 'sub_category') {
          this.regDetails.profile.push({
            name : 'Sub Category',
            value : data['result']['sub_category']['name']
          })
        }
        if (key == 'area') {
          this.regDetails.profile.push({
            name : 'Area',
            value : data['result']['area']['name']
          })
        }
        if (key == 'created_date') {
          this.regDetails.profile.push({
            name : 'Created date',
            value : data['result']['created_date']
          })
        }
        if (key == 'zipcode') {
          this.regDetails.profile.push({
            name : 'Zipcode',
            value : data['result']['zipcode']
          })
        }
        if (key == 'utility') {
          this.regDetails.profile.push({
            name : 'Utility',
            value : data['result']['utility']
          })
        }

      }
      this.address = [
        {
          address: data['result']['address_line_1'],
          heading : 'Supply Address'
        },
        {
          address: data['result']['address_line_1'],
          heading : 'Billing Address'
        },
      ]
    })
  }

  ngOnInit(): void {
  }

}
