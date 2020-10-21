import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { SessionService } from 'src/app/common-services/session-service/session.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { CommonService } from '../../common.service';
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from 'underscore';
import { Subscription } from 'rxjs';



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
  imgpath = "../../../assets/images/";

  modulesList = {
    data: [
      { module: 'S&M', img: this.path + 'bento-menu-1.png', img1: this.imgpath + 'bento-menu-bg-1.png' },
      { module: 'Consumer Care', img: this.path + 'bento-menu-2.png', img1: this.imgpath + 'bento-menu-bg-2.png' },
      { module: 'Consumer Ops', img: this.path + 'bento-menu-3.png', img1: this.imgpath + 'bento-menu-bg-1.png' },
      { module: 'Gas Management', img: this.path + 'bento-menu-4.png', img1: this.imgpath + 'bento-menu-bg-3.png' },
      { module: 'Work Order', img: this.path + 'bento-menu-5.png', img1: this.imgpath + 'bento-menu-bg-4.png' },
      { module: 'Network', img: this.path + 'bento-menu-6.png', img1: this.imgpath + 'bento-menu-bg-5.png' },
      { module: 'Spend', img: this.path + 'bento-menu-7.png', img1: this.imgpath + 'bento-menu-bg-6.png' },
      { module: 'Human Capital', img: this.path + 'bento-menu-1.png', img1: this.imgpath + 'bento-menu-bg-1.png' },
      { module: 'Finance', img: this.path + 'bento-menu-9.png', img1: this.imgpath + 'bento-menu-bg-7.png' },
      { module: 'Admin', img: this.path + 'bento-menu-1.png', img1: this.imgpath + 'bento-menu-bg-1.png' },
    ]
  };

  selectedVal: any = { id: 1, module: '', img: '', img1: '', short_desc: '', long_desc: '' }

  mouseHovered(val) {
    this.selectedVal = this.finalModuleList.find(data => data.module_name === val)
  }

  constructor(private getData: CommonService, private sessionService: SessionService,
    private utilityService: UtilityService, private activatedRoute: ActivatedRoute, private router: Router) { }

  module;
  //Set Module values on click of bentomenu module
  selectModuleId(val, module) {
    this.redurectUrlList(module) 
  }

  modules: any = [];
  module_list: any = [];
  utility_module_list;
  firstUtility: any;
  allUtilities: any = [];
  finalModuleList: any;
  id_string: any = [];

  ngOnInit(): void {

    // it used for get the query params from default module ActivatedRoute(now data is not change after refresh the page)
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.getUtilities(params.cid)
      });  

    $(document).ready(function () {
      $(document).on('click', '.bento-dropdown .dropdown-menu', function (e) {
        e.stopPropagation();
      });
    });
  }

  // For Change Utility on droupdown change bento menu
  subscription: Subscription // for unsubscribe the variables
  utilityOnModuleChange(id) {    
    this.subscription = this.getData.changeTabSource.subscribe(response => { // taking utility id_string from subject subscription(from common service)
      this.getData.getUtilityModuleList(response).subscribe((modules: any) => { //taking utility wise module list
        this.utility_module_list = modules.results 
            if(this.utility_module_list != ""){ //check if module are presnt then exicute
              this.finalModuleList = this.utility_module_list.map((item, i) => Object.assign({}, item, this.modulesList.data[i]))
            }else{
              this.finalModuleList = []    
            }
            // send data of utility id_string for default side nav / send utility id_string to common service function for pass utility id_string to side nav
            this.getData.getSideNavData(response)
      })
    })
  }


  // utility wise display models(display selected utility on dropdown)
  getUtilitieModules(id?, utilities?) {
    if (id) {
      this.firstUtility = _.find(utilities, function (utility) {
        return utility.id_string == id
      }).id_string
    } else {
      this.firstUtility = utilities[0].id_string // set default utility on utility dropdown
    }
    this.utilityOnModuleChange(id) // after change utility then refresh the page, now not change the value after refresh the page
  }

  //get the utility list of login user
  getUtilities(id?) {
    this.getData.getUserUtility().subscribe((responce: any) => { //API call for taking user utility
      // get the module list of selected utility
      this.getUtilitieModules(id, responce.data.utilities)
    })
  }


  subModuleList = [
    { module: 'Consumer Care', sub_module: 'Dashboard', icon: 'icons8 icons8-speed', link: '/campaign', ngbPopover: "Dashboard Consumer Care" },
    { module: 'Admin', sub_module: 'Utility Master', icon: 'icons8 icons8-brief', ngbPopover: "Utility Master" },
    { module: 'Admin', sub_module: 'System Configuration', icon: 'icons8 icons8-todo-list', ngbPopover: "System Configuration" },
    { module: 'Admin', sub_module: 'Utility Configuration', icon: 'icons8 icons8-user', ngbPopover: "Utility Configuration" },
    { module: 'Consumer Ops', sub_module: 'Dashboard', icon: 'icons8 icons8-speed', link: '/user', ngbPopover: "Dashboard Consumer" },
    { module: 'Consumer Ops', sub_module: 'Complaints', icon: 'icons8 icons8-document', link: '/complaint', ngbPopover: "Complaints" },
    { module: 'Consumer Care', sub_module: 'Consumers', icon: 'icons8 icons8-cv', link: '/campaign', ngbPopover: "Consumers care" },
    { module: 'S&M', sub_module: 'Registrations', icon: 'icons8 icons8-shared-document', link: '/consumerops/registration', ngbPopover: "Registration" },
    { module: 'S&M', sub_module: 'Campaign', icon: 'icons8 icons8-megaphone', link: '/campaign', ngbPopover: "Campaign" },
    { module: 'Consumer Ops', sub_module: 'Meter Data', icon: 'icons8 icons8-conflict', link: '#', ngbPopover: "Meter Data" },
    { module: 'S&M', sub_module: 'Users', icon: 'icons8 icons8-cv', link: '/user', ngbPopover: "Users" },
  ]
  commonVal;
  finalList;
  redurectUrlList(moduleName?){
    this.commonVal = this.subModuleList.filter(obj => JSON.stringify(obj.module) == JSON.stringify(moduleName));
    this.finalList = this.subModuleList.filter(o1 => this.commonVal.some(o2 => (o1.module === o2.module) && (o1.sub_module === o2.sub_module)));
    this.subscription.unsubscribe();
    this.sessionService.setter("moduleName",moduleName)

    if (this.finalList[0].link) {
      this.router.navigate([this.finalList[0].link], { queryParams: { moduleName: moduleName } });
      // this.router.navigate([this.finalList[0].link]);
      // this.router.navigate([this.finalList[0].link], { queryParams: {moduleName: moduleName,cid: this.utilityId } });

    } else {
      this.router.navigate(['/home'], { queryParams: { moduleName: moduleName } });
      // this.router.navigate(['/home'],{ queryParams: {moduleName: moduleName,cid: this.utilityId } });
    }
  }

}
