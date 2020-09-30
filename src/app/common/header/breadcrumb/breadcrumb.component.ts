import { Component, Input, OnInit } from '@angular/core';
import { CommonService} from '../../common.service';

@Component({
  selector: 'smart360-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  moduleVal:any;
  subModuleVal:any;
  breadCrumb:any;

  sideNavList = { data: [
    {module_id:undefined,sub_module_id:1,module : 'S&M',sub_module:'Dashboard',modulelink:'#'},
    {module_id:undefined,sub_module_id:2,module : 'S&M',sub_module:'Campaign',modulelink:'#'},
    {module_id:undefined,sub_module_id:3, module : 'S&M',sub_module:'Survey',modulelink:'#'},
    {module_id:undefined, sub_module_id:4, module : 'S&M',sub_module:'Registrations',modulelink:'#'},
    {module_id:undefined,sub_module_id:5,module : 'S&M',sub_module:'Consumers',modulelink:'#'},
    {module_id:undefined,sub_module_id:6,module : 'S&M',sub_module:'Reports',modulelink:'#'},
    {module_id:undefined,sub_module_id:7,module : 'S&M',sub_module:'Users',modulelink:'#'},
    {module_id:undefined,sub_module_id:8,module : 'S&M',sub_module:'Settings',modulelink:'#'},
    {module_id:1,sub_module_id:1,module : 'S&M',sub_module:'Dashboard',modulelink:'#'},
    {module_id:1,sub_module_id:2,module : 'S&M',sub_module:'Campaign',modulelink:'#'},
    {module_id:1,sub_module_id:3, module : 'S&M',sub_module:'Survey',modulelink:'#'},
    {module_id:1, sub_module_id:4, module : 'S&M',sub_module:'Registrations',modulelink:'#'},
    {module_id:1,sub_module_id:5,module : 'S&M',sub_module:'Consumers',modulelink:'#'},
    {module_id:1,sub_module_id:6,module : 'S&M',sub_module:'Reports',modulelink:'#'},
    {module_id:1,sub_module_id:7,module : 'S&M',sub_module:'Users',modulelink:'#'},
    {module_id:1,sub_module_id:8,module : 'S&M',sub_module:'Settings',modulelink:'#'},
    {module_id:3,sub_module_id:1,module : 'Consumer Ops',sub_module:'Dashboard',modulelink:'#'},
    {module_id:3,sub_module_id:2,module : 'Consumer Ops',sub_module:'Survey',modulelink:'#'},
    {module_id:3,sub_module_id:3, module : 'Consumer Ops',sub_module:'Consumers',modulelink:'#'},
    {module_id:3,sub_module_id:4,module : 'Consumer Ops',sub_module:'Meter Data',modulelink:'#'},
    {module_id:3,sub_module_id:5,module : 'Consumer Ops',sub_module:'Billing',modulelink:'#'},
    {module_id:3,sub_module_id:6,module : 'Consumer Ops',sub_module:'Payment',modulelink:'#'},
    {module_id:3,sub_module_id:7,module : 'Consumer Ops',sub_module:'Service',modulelink:'#'},
    {module_id:3,sub_module_id:8,module : 'Consumer Ops',sub_module:'Complaint',modulelink:'#'},
    {module_id:3,sub_module_id:9,module : 'Consumer Ops',sub_module:'Reports',modulelink:'#'},
    {module_id:3,sub_module_id:10,module : 'Consumer Ops',sub_module:'Users',modulelink:'#'},
    {module_id:3,sub_module_id:11,module : 'Consumer Ops',sub_module:'Settings',modulelink:'#'},
] };

  constructor(private getData:CommonService) {
    this.getData.moduleName.subscribe(data =>{
      this.moduleVal = data
    })
    this.breadCrumb = this.sideNavList
    this.getData.sideNavId.subscribe(data =>{
      this.subModuleVal = data
      if(this.moduleVal == "S&M" || this.moduleVal == "Consumer Ops"){
      this.breadCrumb = this.sideNavList.data.find(data => data.module == this.moduleVal && data.sub_module == this.subModuleVal)
      }
      else{
        this.breadCrumb = this.sideNavList.data.find(data => data.module_id == undefined && data.sub_module === this.subModuleVal)
      }
    })
   } 


  ngOnInit(): void {
  }

}
