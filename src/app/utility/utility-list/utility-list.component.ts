import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { CommonService } from 'src/app/common/common.service';
import { UtilityService } from '../utility.service'

@Component({
  selector: 'app-utility-list',
  templateUrl: './utility-list.component.html',
  styleUrls: ['./utility-list.component.scss']
})
export class UtilityListComponent implements OnInit {

  dataSet;
  constructor(private utilityservice:UtilityService,private getData:CommonService,private sessionService:SessionService) { }

  ngOnInit(): void {

    // Display utility details at time of page load      
    this.defaultModule()

    // Display utility details After changing utility
    this.getData.utilityIdString.subscribe(result=>{
      this.sessionService.setter("utility_id_string",result)
      this.utilityservice.getUtilityListData(result).subscribe(utilitydata=>{
        this.dataSet = utilitydata.result.name
      })
    })
  }

  id_string;
  defaultModule(){
      this.id_string = this.sessionService.getter("utility_id_string")
      this.utilityservice.getUtilityListData(this.id_string).subscribe(utilitydata=>{
        this.dataSet = utilitydata.result.name
      })
  }

}
