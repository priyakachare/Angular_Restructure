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
  defaultModule;
  sideNavList = { data: [
    {module : 'S&M',sub_module:'Dashboard',modulelink:'#'},
    {module : 'S&M',sub_module:'Campaign',modulelink:'#'},
    {module : 'S&M',sub_module:'Survey',modulelink:'#'},
    {module : 'S&M',sub_module:'Registrations',modulelink:'#'},
    {module : 'S&M',sub_module:'Consumers',modulelink:'#'},
    {module : 'S&M',sub_module:'Reports',modulelink:'#'},
    {module : 'S&M',sub_module:'Users',modulelink:'#'},
    {module : 'S&M',sub_module:'Settings',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Dashboard',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Survey',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Consumers',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Meter Data',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Billing',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Payment',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Service',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Complaint',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Reports',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Users',modulelink:'#'},
    {module : 'Consumer Ops',sub_module:'Settings',modulelink:'#'},
    {module : 'Admin',sub_module:'Utility Master',modulelink:'#'},
    {module : 'Admin',sub_module:'System Configuration',modulelink:'#'},
    {module : 'Admin',sub_module:'Utility Configuration',modulelink:'#'},
] };

  constructor(private getData:CommonService) {
    
    this.getData.moduleName.subscribe(data =>{
      this.moduleVal = data
    })
    this.breadCrumb = this.sideNavList
    this.getData.sideNavId.subscribe(data =>{
      this.subModuleVal = data
      if(this.subModuleVal === "Dashboard"){
        this.breadCrumb = this.sideNavList.data.find(data=>data.module == this.moduleVal,data.sub_module == this.subModuleVal)
      }else{
        this.breadCrumb = this.sideNavList.data.find(data=>data.sub_module == this.subModuleVal)
      }
    })
   } 


  ngOnInit(): void {
  }

}
