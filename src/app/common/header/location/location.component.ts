import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from '../../common.service';

@Component({
  selector: 'smart360-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  utilities:any=[]

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.utilityList.subscribe(data=>{
      this.utilities = data
      console.log('----------------'+this.utilities)
    })
  }

}
