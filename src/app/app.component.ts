import { Component } from '@angular/core';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedVal;
  navList;
  openSideNav;
  showPopUp;
  meterData;
  settingSnm;


  constructor(private getData:CommonService) {
    //for open slider on click 
    this.meterData ={title:'Meter Data' ,data :[
      {id:1,navData:'Schedule',link:'#'},{id:2,navData:'Dispatch',link:'#'},{navData:'Validation',link:'#'},
      {navData:'Upload',link:'#'},{navData:'Smart Meter Data',link:'#'}
    ]};

    this.settingSnm ={title:'Settings' ,data :[
      {id:1,navData:'Survey Type',link:'#'},{id:2,navData:'Campaign Type',link:'#'},{navData:'Campaign Frequency Type',link:'#'},
    ]};
    
    this.getData.sideNavId.subscribe(data =>{
      this.openSideNav = data
      if(this.selectedVal==3 && this.openSideNav==4){
        console.log('--------------'+this.selectedVal + this.openSideNav)
        this.showPopUp = !this.showPopUp
        this.meterData = this.meterData
      }
      else if(this.selectedVal==1 && this.openSideNav==8||this.selectedVal==undefined && this.openSideNav==8){
        this.showPopUp = !this.showPopUp
        this.meterData = this.settingSnm
      }
    })  

    // Show side nav data/Module list
    this.navList = [
      {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},
      {id:2, module : 'Campaign',icon:'icons8 icons8-megaphone',link:'#',ngbPopover:"Campaign"},
      {id:3, module : 'Survey',icon:'icons8 icons8-flow-chart',link:"#",ngbPopover:"Survey"},
      {id:4, module : 'Registration',icon:'icons8 icons8-shared-document',link:'consumerops/registration',ngbPopover:"Registration"},
      {id:5, module : 'Consumers',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Consumers"},
      {id:6, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
      {id:7, module : 'Users',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Users"},
      {id:8, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
    ];

    this.getData.newItemEvent.subscribe(data =>{
      this.selectedVal = data
      if(data == 1){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},
          {id:2, module : 'Campaign',icon:'icons8 icons8-megaphone',link:'#',ngbPopover:"Campaign"},
          {id:3, module : 'Survey',icon:'icons8 icons8-flow-chart',link:'#',ngbPopover:"Survey"},
          {id:4, module : 'Registration',icon:'icons8 icons8-shared-document',link:'consumerops/registration',ngbPopover:"Registration"},
          {id:5, module : 'Consumers',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Consumers"},
          {id:6, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:7, module : 'Users',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Users"},
          {id:8, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 2){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},
          {id:2, module : 'Consumers',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Consumers"},
          {id:3, module : 'Registration',icon:'icons8 icons8-shared-document',link:'consumerops/registration',ngbPopover:"Registration"},          
          {id:4, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:5, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:6, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 3){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
          {id:2, module : 'Registration',icon:'icons8 icons8-shared-document',link:'#',ngbPopover:"Registration"},
          {id:3, module : 'Consumers',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Consumers"},   
          {id:4, module : 'Meter Data',icon:'icons8 icons8-conflict',ngbPopover:"Meter Data"},
          {id:5, module : 'Billing',icon:'icons8 icons8-paycheque',link:'#',ngbPopover:"Billing"},
          {id:6, module : 'Payment',icon:'icons8 icons8-document',link:'#',ngbPopover:"Payment"},  
          {id:7, module : 'Service',icon:'icons8 icons8-paycheque',link:'#',ngbPopover:"Service"},
          {id:8, module : 'Complaint',icon:'icons8 icons8-document',link:'#',ngbPopover:"Complaint"},        
          {id:9, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:10, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:11, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 4){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
          {id:2, module : 'Contracts',icon:'icons8 icons8-shared-document',link:'#',ngbPopover:"Contracts"},
          {id:3, module : 'Supplier',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Supplier"},   
          {id:4, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:5, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:6, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 5){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},
          {id:2, module : 'Dispatcher',icon:'icons8 icons8-submit-document',link:'#',ngbPopover:"Dispatcher"},             
          {id:2, module : 'Assets',icon:'icons8 icons8-brief',link:'#',ngbPopover:"Assets"},   
          {id:3, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:4, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:5, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 6){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
          {id:2, module : 'Assets',icon:'icons8 icons8-brief',link:'#',ngbPopover:"Assets"},   
          {id:3, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:4, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:5, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 7){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
          {id:2, module : 'Request',icon:'icons8 icons8-estimate',link:'#',ngbPopover:"Request"},   
          {id:3, module : 'Store',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Store"},   
          {id:4, module : 'Tenders',icon:'icons8 icons8-news',link:'#',ngbPopover:"Tenders"},   
          {id:5, module : 'Product',icon:'icons8 icons8-document',link:'#',ngbPopover:"Product"},   
          {id:6, module : 'Services',icon:'icons8 icons8-document',link:'#',ngbPopover:"Services"},
          {id:7, module : 'Order',icon:'icons8 icons8-document',link:'#',ngbPopover:"Order"},   
          {id:8, module : 'Contracts',icon:'icons8 icons8-document',link:'#',ngbPopover:"Contracts"},
          {id:9, module : 'Supplier',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Supplier"},
          {id:10, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:11, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:12, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 8){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
          {id:2, module : 'Reports',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"Reports"},
          {id:3, module : 'Users',icon:'icons8 icons8-user',link:'#',ngbPopover:"Users"},
          {id:4, module : 'Settings',icon:'icons8 icons8-settings',link:'#',ngbPopover:"Settings"}
        ];
      }
      else if(data == 9){
        this.navList = [
          {id:1, module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard"},          
        ];
      }
      else if(data == 10){
        this.navList = [
          {id:1, module : 'Utility Master',icon:'icons8 icons8-brief',link:'#',ngbPopover:"Utility Master"},          
          {id:2, module : 'System Configuration',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"System Configuration"},
          {id:3, module : 'Utility Configuration',icon:'icons8 icons8-user',link:'#',ngbPopover:"Utility Configuration"},
          {id:4, module : 'Integrations',icon:'icons8 icons8-paycheque',link:'#',ngbPopover:"Integrations"}
        ];
      }      
    })    
   }    
}
