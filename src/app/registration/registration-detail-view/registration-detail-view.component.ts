import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

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

  address = [
	{
		address: '3964 Small Street New york, 1235 New street AL - 35573 USA',
		heading : 'Supply Address'
	},
	{
		address: '3964 Small Street New york, 1235 New street AL - 35573 USA',
		heading : 'Billing Address'
	}
  ]

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

  constructor() { }

  ngOnInit(): void {
  }

}
