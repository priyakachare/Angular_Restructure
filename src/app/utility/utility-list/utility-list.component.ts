import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service'

@Component({
  selector: 'app-utility-list',
  templateUrl: './utility-list.component.html',
  styleUrls: ['./utility-list.component.scss']
})
export class UtilityListComponent implements OnInit {

  dataSet;
  moduleList;
  constructor(private utilityservice:UtilityService) { }

  ngOnInit(): void {

    this.utilityservice.getUtilityListData().subscribe(utilitydata=>{
      this.dataSet = utilitydata.results
      // for(let utility of this.dataSet){
      //   this.utilityservice.getUtilityModuleListData(utility.id_string).subscribe(module=>{
      //     this.moduleList = module.results
      //   })

      // }
    })
  }

}
