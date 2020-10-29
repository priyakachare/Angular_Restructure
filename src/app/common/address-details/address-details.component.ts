import { Component, OnInit, Input } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  @Input() data;
  address = []
  faMapMarkerAlt = faMapMarkerAlt;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.address = this.data
  }

  viewOnMap(address){
    let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDyIaM9-j3liLjlWetvLpnFPkqaNlHeMjA&q="+address
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
