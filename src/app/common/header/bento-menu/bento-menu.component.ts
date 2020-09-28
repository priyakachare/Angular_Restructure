import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
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
    {id: 1, module : 'S&M',listClass:'media bento-menu-blk',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 2 ,module : 'Consumer Care',listClass:'media bento-menu-blk',img : this.path +'bento-menu-2.png',img1: this.imgpath +'bento-menu-bg-2.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Consumer Care Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 3, module : 'Consumer Ops',listClass:'media bento-menu-blk',img : this.path +'bento-menu-3.png',img1: this.imgpath +'bento-menu-bg-1.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Consumer Ops Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 4, module : 'Gas Management',listClass:'media bento-menu-blk',img : this.path +'bento-menu-4.png',img1: this.imgpath +'bento-menu-bg-3.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Gas Management Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 5, module : 'Work Order',listClass:'media bento-menu-blk',img : this.path +'bento-menu-5.png',img1: this.imgpath +'bento-menu-bg-4.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 6, module : 'Network',listClass:'media bento-menu-blk',img : this.path +'bento-menu-6.png',img1: this.imgpath +'bento-menu-bg-5.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 7, module : 'Spend',listClass:'media bento-menu-blk',img : this.path +'bento-menu-7.png',img1: this.imgpath +'bento-menu-bg-6.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 8, module : 'Human Capital',listClass:'media bento-menu-blk',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 9, module : 'Finance',listClass:'media bento-menu-blk',img : this.path +'bento-menu-9.png',img1: this.imgpath +'bento-menu-bg-7.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 10,module : 'Admin',listClass:'media bento-menu-blk',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',short_desc : 'Lorem ipsum dolor sit amet',long_desc: 'Admin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
  ] };

  selectedVal ={id: 1, module : '',img : '',img1: '',short_desc : '',long_desc: ''}
  
  mouseHovered(val) {
    this.selectedVal = this.modulesList.data.find(data => data.id === +val)    
  }
  
  constructor(private getData:CommonService) { }

  //Set Module Id in Common Service EventEmitter
  selectModuleId(val,module){
    this.getData.newItemEvent.emit(val);
    this.getData.moduleName.emit(module);
  }

  modules:any = [];
  sub_modules = [];
  module_list:any = [];
  val:any = [];
  ngOnInit(): void {

    // According to Role and Privilege display Bento menu options
    this.getData.checkRolePrivilege().subscribe(result=>{
      for(let role of result.data.roles ){              
        for(let module of role.modules.module){
          this.modules.push({"name":module.name})
        }
        this.module_list = this.modulesList.data.filter(o1 => this.modules.some(o2 => o1.module === o2.name));           
      }   
    })
    $(document).ready(function(){
      $(document).on('click', '.bento-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      });
    });
  }

}
