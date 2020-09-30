import { Component, OnInit, Input } from '@angular/core';
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
  navList;
  moduleId;
  settingSnm;
  showPopUpFlag:boolean=false;
  commonVal;
  finalList;
  constructor(private getData:CommonService) {     
    this.getData.moduleName.subscribe(module=>{
      this.commonVal = this.subModuleList.filter(obj=>obj.module===module);
      this.finalList = this.commonVal.filter(o1 => this.module_subModule.some(o2 => (o1.module === o2.module)&&(o1.sub_module === o2.sub_module))); 
    });    
  }  

  subModuleList =[
    {id:1,module:'Admin', sub_module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"DashboardAdmin"},
    {id:2,module:'Admin', sub_module : 'Utility Master',icon:'icons8 icons8-brief',link:'#',ngbPopover:"Utility Master"}, 
    {id:3,module:'Admin', sub_module : 'System Configuration',icon:'icons8 icons8-todo-list',link:'#',ngbPopover:"System Configuration"},         
    {id:1,module:'Consumer Care', sub_module : 'Dashboard',icon:'icons8 icons8-speed',link:'#',ngbPopover:"Dashboard Consumer"},
    {id:2,module:'Consumer Care', sub_module : 'Consumers',icon:'icons8 icons8-cv',link:'#',ngbPopover:"Consumers"},
    {id:1,module:'S&M', sub_module : 'Registrations',icon:'icons8 icons8-shared-document',link:'/consumerops/registration',ngbPopover:"Registration"},
    {id:2,module:'Consumer Ops',sub_module : 'Meter Data',icon:'icons8 icons8-conflict',link:'#',ngbPopover:"Meter Data"},
  ]

  module_subModule:any = [];
  sub_module_list:any = [];
  defaultModule;

  ngOnInit(): void {     
    // According to Role and Privilege display Side nav data
    this.getData.moduleObj.subscribe(result=>{
      for(let role of result.data.roles ){  
        this.defaultModule = result.data.roles[0].modules.module[0].name
        for(let module of role.modules.module){
            for(let submodule of module.sub_module){
              this.module_subModule.push({"module":module.name,"sub_module":submodule.name})
            }            
          }
        } 
      this.commonVal = this.subModuleList.filter(obj=>obj.module===this.defaultModule);
      this.finalList = this.commonVal.filter(o1 => this.module_subModule.some(o2 => (o1.module === o2.module)&&(o1.sub_module === o2.sub_module)));  
    })

    $(document).ready(function(){
      $(".menubttn").parents(".pr-side-navbar").removeClass("open-slide");    
      // $(".menubttn").parents(".pr-side-navbar").removeClass("open-slide");    
      // $('.menubttn').click(function(){
      //   $(this).toggleClass('open');
      // });

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

    if(sub_module === "Meter Data"){
      this.showPopUpFlag = !this.showPopUpFlag
      this.meterData = this.meterData
    }
    // else if(this.moduleId==1 && id==8||this.moduleId==undefined && id==8){
    //   this.showPopUpFlag = !this.showPopUpFlag
    //   this.meterData = this.settingSnm
    // }    
   }

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
      $("body").toggleClass("hide-popover");
  }

}
