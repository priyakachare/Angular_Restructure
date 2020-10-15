import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { CommonService } from '../../common.service';


@Component({
  selector: 'smart360-bento-menu',
  templateUrl: './bento-menu.component.html',
  styleUrls: ['./bento-menu.component.scss']
})
export class BentoMenuComponent implements OnInit {  
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faMapMarkerAlt = faMapMarkerAlt;
  faBell = faBell;
  faPlus = faPlus;

  menuScrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  notificationScrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 33,
    scrollbarMaxSize: 99,
  };
  
  path = '../../../assets/images/';
  imgpath ="../../../assets/images/";

  modulesList = { data: [
    {module : 'S&M',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png'},
    {module : 'Consumer Care',img : this.path +'bento-menu-2.png',img1: this.imgpath +'bento-menu-bg-2.png'},
    {module : 'Consumer Ops',img : this.path +'bento-menu-3.png',img1: this.imgpath +'bento-menu-bg-1.png'},
    {module : 'Gas Management',img : this.path +'bento-menu-4.png',img1: this.imgpath +'bento-menu-bg-3.png'},
    {module : 'Work Order',img : this.path +'bento-menu-5.png',img1: this.imgpath +'bento-menu-bg-4.png'},
    {module : 'Network',img : this.path +'bento-menu-6.png',img1: this.imgpath +'bento-menu-bg-5.png'},
    {module : 'Spend',img : this.path +'bento-menu-7.png',img1: this.imgpath +'bento-menu-bg-6.png'},
    {module : 'Human Capital',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png'},
    {module : 'Finance',img : this.path +'bento-menu-9.png',img1: this.imgpath +'bento-menu-bg-7.png'},
    {module : 'Admin',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png'},
  ] };

  selectedVal:any={id: 1, module : '',img : '',img1: '',short_desc : '',long_desc: ''}
  
  mouseHovered(val) {
    this.selectedVal = this.finalModuleList.find(data => data.module_name === val)  
  }
  
  constructor(private getData:CommonService, private sessionService:SessionService,private utilityService:UtilityService) { }

  //Set Module Id in Common Service EventEmitter
  selectModuleId(val,module){
    this.getData.newItemEvent.emit(val);
    this.getData.moduleName.emit(module);
  }

  modules:any = [];
  module_list:any = [];
  utility_module_list;
  firstUtility:any;
  allUtilities:any=[];
  finalModuleList:any=[];

  id_string:any=[]
  ngOnInit(): void {

    // For Change Utility on droupdown change bento menu
    this.getData.utilityIdString.subscribe(id_string=>{
      this.firstUtility = id_string
      

      // Taking list of module according to firstUtility
      this.getData.getUtilityModuleList(this.firstUtility).subscribe(modules =>{
        this.utility_module_list = modules.results
        if(this.utility_module_list != ""){
          this.getData.moduleName.emit(this.utility_module_list[0].module_name)
          this.finalModuleList = this.utility_module_list.map((item, i) => Object.assign({}, item, this.modulesList.data[i]))
        }else{
          this.getData.moduleName.emit(this.utility_module_list)
          this.finalModuleList = []

        }
        
      })
    })
    // According to Role and Privilege display Bento menu options
    this.getData.checkRolePrivilege().subscribe(result=>{
      this.getData.moduleObj.emit(result)
      for(let role of result.data.roles ){              
        for(let module of role.modules.module){
          this.modules.push({"name":module.name})
        }
        this.module_list = this.modulesList.data.filter(o1 => this.modules.some(o2 => o1.module === o2.name));           
      }   
    })

    // Taking All Utilities of login user
    this.getData.getUserUtility().subscribe(utility_obj=>{
      for(let utility of utility_obj.data.utilities){
        this.allUtilities.push({"id_string":utility.id_string,"name":utility.name})
      }           
      this.firstUtility = utility_obj.data.utilities[0].id_string

      // set default utility value for display utility detail
      this.sessionService.setter("utility_id_string",this.firstUtility)

      // for display utility list in dropdown
      this.getData.utilityList.emit(this.allUtilities)   


      // Taking list of module according to firstUtility
      this.getData.getUtilityModuleList(this.firstUtility).subscribe(modules =>{
        this.utility_module_list = modules.results
        if(this.utility_module_list != ""){
          this.getData.moduleName.emit(this.utility_module_list[0].module_name)
          this.finalModuleList = this.utility_module_list.map((item, i) => Object.assign({}, item, this.modulesList.data[i]))
        }else{
          this.finalModuleList = []
        }
        this.getData.checkBlankUtility.emit(this.utility_module_list)
      })
    })
 
    $(document).ready(function(){
      $(document).on('click', '.bento-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      });
    });
  }

}
