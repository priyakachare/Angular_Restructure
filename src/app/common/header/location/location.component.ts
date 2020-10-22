import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { CommonService } from '../../common.service';
import * as _ from 'underscore';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'smart360-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  utilities:any;
  facilityId;
  constructor(private getData:CommonService,private sessionService:SessionService,private activatedRoute:ActivatedRoute
    ,private router:Router) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams
      .subscribe(params => {
        this.getUtilities(params.cid)        
      });
  }

  //change utility
  onOptionsSelected(utility_id_string){
    this.getData.getUtilities(utility_id_string) //pass utility data to bento menu hold in common service
    this.sessionService.setter("utility_id_string",utility_id_string)
    this.router.navigate(['/home'])
  }

  // API Call for taking utility list
  getUtilities(id?){
    id = id || this.sessionService.getter('utility_id_string')
    this.getData.getUserUtility().subscribe((responce:any)=>{
      this.utilities = responce.data.utilities
      if(id){

        this.facilityId = _.find(this.utilities,function(utility){
          return utility.id_string == id
        }).id_string
        this.getData.getUtilities(id)
      }else{
          this.facilityId = responce.data.utilities[0].id_string
          this.getData.getUtilities(this.facilityId)
      }
      
    })
  }

}
