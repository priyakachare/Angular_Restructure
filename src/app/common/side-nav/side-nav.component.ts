import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { CommonService} from '../common.service';

@Component({
  selector: 'smart360-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faPlus = faPlus;
  settingSnm;
  utilityConfigurationAdmin;
  showPopUpFlag:boolean=false;
  commonVal;
  finalList;
  utilityIdString;
  constructor(private getData:CommonService,private router: Router) {     
    this.getData.moduleName.subscribe(module=>{
      this.commonVal = this.subModuleList.filter(obj=>obj.module===module);
      this.finalList = this.subModuleList.filter(o1 => this.commonVal.some(o2 => (o1.module === o2.module)&&(o1.sub_module === o2.sub_module)));  
      
    });    

    // For Change Utility on droupdown change bento menu
    this.getData.utilityIdString.subscribe(id_string=>{
      // Taking list of module according to firstUtility
      this.getData.getUtilitySubModuleList(id_string).subscribe(submodules =>{
        this.subModules = submodules.results        
      })
    })
  }  

  subModuleList =[
    {module : 'Consumer Care',sub_module : 'Dashboard',icon:'icons8 icons8-speed',link:'/campaign',ngbPopover:"Dashboard Consumer Care"},
    {module : 'Admin',sub_module : 'Utility Master',icon:'icons8 icons8-brief',ngbPopover:"Utility Master"}, 
    {module : 'Admin',sub_module : 'System Configuration',icon:'icons8 icons8-todo-list',ngbPopover:"System Configuration"},  
    {module : 'Admin',sub_module : 'Utility Configuration',icon:'icons8 icons8-user',ngbPopover:"Utility Configuration"},                
    {module : 'Consumer Ops',sub_module : 'Dashboard',icon:'icons8 icons8-speed',link:'/user',ngbPopover:"Dashboard Consumer"},
    {module : 'Consumer Care',sub_module : 'Consumers',icon:'icons8 icons8-cv',link:'/campaign',ngbPopover:"Consumers care"},
    {module : 'S&M',sub_module : 'Registrations',icon:'icons8 icons8-shared-document',link:'/consumerops/registration',ngbPopover:"Registration"},
    {module : 'S&M',sub_module : 'Campaign',icon:'icons8 icons8-megaphone',link:'/campaign',ngbPopover:"Campaign"},
    {module : 'Consumer Ops',sub_module : 'Meter Data',icon:'icons8 icons8-conflict',link:'#',ngbPopover:"Meter Data"},
    {module : 'S&M',sub_module : 'Users',icon:'icons8 icons8-cv',link:'/user',ngbPopover:"Users"},
  ]


  moduleSubModule:any = [];
  defaultModule;
  subModules:any=[];
  defaultModuleName;
  utilityMasterAdmin;

  ngOnInit(): void { 

    // After Change Utility set the side nav data
    this.getData.moduleName.subscribe(moduleName=>{
      this.commonVal = this.subModuleList.filter(obj=>obj.module===moduleName);
      this.finalList = this.subModuleList.filter(o1 => this.commonVal.some(o2 => (o1.module === o2.module)&&(o1.sub_module === o2.sub_module))); 
    })

    // According to Role and Privilege display Side nav data
    this.getData.moduleObj.subscribe(result=>{
      for(let role of result.data.roles ){  
        this.defaultModule = result.data.roles[0].modules.module[0].name
        for(let module of role.modules.module){
            for(let submodule of module.sub_module){
              this.moduleSubModule.push({"module":module.name,"sub_module":submodule.name})
            }            
          }
        } 
        this.getData.checkBlankUtility.subscribe(checkUtility=>{
          if(checkUtility != ""){
            this.commonVal = this.subModuleList.filter(obj=>obj.module===this.defaultModule);
            this.finalList = this.subModuleList.filter(o1 => this.commonVal.some(o2 => (o1.module === o2.module)&&(o1.sub_module === o2.sub_module))); 
          }else{
            this.finalList =  []
          }
        })
    })     

    $(document).ready(function(){
      $(".menubttn").parents(".pr-side-navbar").removeClass("open-slide");  
      // For modal close on cross click
      $('.modal').find('.close').on('click', function() {
        $(this).parents('.modal').removeClass('show');
      });  
    });
  }  

  meterData = {title:'Meter Data' ,data :[
    {id:1,navData:'Schedule',link:'meter-data/schedule'},{id:2,navData:'Dispatch',link:'#'},{navData:'Validation',link:'#'},
    {navData:'Upload',link:'#'},{navData:'Smart Meter Data',link:'#'}
  ]};

  showPopup(sub_module){   

    this.getData.sideNavId.emit(sub_module)  

    this.meterData ={title:'Meter Data' ,data :[
      {id:1,navData:'Schedule',link:'meter-data/schedule'},{id:2,navData:'Dispatch',link:'#'},{navData:'Validation',link:'#'},
      {navData:'Upload',link:'#'},{navData:'Smart Meter Data',link:'#'}
    ]};

    this.settingSnm ={title:'Settings' ,data :[
      {id:1,navData:'Survey Type',link:'#'},{id:2,navData:'Campaign Type',link:'#'},{navData:'Campaign Frequency Type',link:'#'},
    ]};

    this.utilityMasterAdmin ={title:'Utility Master' ,data :[
      {id:1,navData:'Utility',link:'/utility'},{id:2,navData:'Plans',link:'#'},
    ]};

    this.utilityConfigurationAdmin ={title:'Utility Configuration' ,data :[
      {id:1,navData:'Configuration',link:'/utility/configration'}
    ]};

    if(sub_module === "Meter Data"){
      this.showPopUpFlag = !this.showPopUpFlag
      this.meterData = this.meterData
    }
    else if(sub_module === "Utility Master"){
      this.showPopUpFlag = !this.showPopUpFlag
      this.meterData = this.utilityMasterAdmin
    }
    else if(sub_module === "Utility Configuration"){
      this.showPopUpFlag = !this.showPopUpFlag
      this.meterData = this.utilityConfigurationAdmin
    }
    
   }

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
      $("body").toggleClass("hide-popover");
  }

}
