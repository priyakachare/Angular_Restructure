import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'smart360-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  utilities:any=[]
  facilityId;
  constructor(private commonService:CommonService,private sessionService:SessionService) { }

  ngOnInit(): void {
    this.commonService.utilityList.subscribe(data=>{
      this.utilities = data

    })

    this.facilityId = this.sessionService.getter('utility_id_string')
  }

  onOptionsSelected(utility_id_string){
    this.commonService.utilityIdString.emit(utility_id_string)
  }

}
