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
  
  path = '../../../assets/images/'

  modulesList = { count: 12, data: [
    {
      module : 'Sales & Marketing',
      img : this.path +'bento-menu-1.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Consumer Care',
      img : this.path +'bento-menu-2.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Consumer Ops',
      img : this.path +'bento-menu-3.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Gas Management',
      img : this.path +'bento-menu-4.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Work Order',
      img : this.path +'bento-menu-5.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Network',
      img : this.path +'bento-menu-6.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'spend',
      img : this.path +'bento-menu-7.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Human Capital',
      img : this.path +'bento-menu-1.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Finance',
      img : this.path +'bento-menu-9.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
    {
      module : 'Admin',
      img : this.path +'bento-menu-1.png',
      desc : 'Lorem ipsum dolor sit amet'
    },
  ] };


  constructor(private getData:CommonService) { }

  collapsed = true;

  public snmshown:boolean = false;
  snmHovered() {this.snmshown = true;}
  snmNotHovered() {this.snmshown = false;}

  public concareshown:boolean = false;
  concareHovered() {this.concareshown = true;}
  concareNotHovered() {this.concareshown = false;}

  public conopsshown:boolean = false;
  conopsHovered() {this.conopsshown = true;}
  conopsNotHovered() {this.conopsshown = false;}

  public gasmgtshown:boolean = false;
  gasMgtHovered(){this.gasmgtshown = true;}
  gasMgtNotHovered(){this.gasmgtshown = false;}

  public workOredrshown:boolean = false;
  workOrderHovered(){this.workOredrshown = true;}
  workOrderNotHovered(){this.workOredrshown = false;}


  public networkshown:boolean = false;
  netWorkHovered(){this.networkshown = true;}
  netWorkNotHovered(){this.networkshown = false;}


  public spendshown:boolean = false;
  spendHovered(){this.spendshown = true;}
  spendNotHovered(){this.spendshown = false;}

  public humanCapitalshown:boolean = false;
  humanCapitalHovered(){this.humanCapitalshown = true;}
  humanCapitalNotHovered(){this.humanCapitalshown = false;}

  public financeshown:boolean = false;
  financeHovered(){this.financeshown = true;}
  financeNotHovered(){this.financeshown = false;}

  public adminshown:boolean = false;
  adminHovered(){this.adminshown = true;}
  adminNotHovered(){this.adminshown = false;}

  getSideNavData(val){
    this.getData.newItemEvent.emit(val);
  }

  public tab: any;

  ngOnInit(): void {
    $(document).ready(function(){
      $('.bentobttn').on('click touchstart', function () {
        $(this).toggleClass('open');
      });
      $('#smart360-side-nav-snm-a').on('click', function(){

        
        // alert(1);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-snm-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-conscare-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-conscare-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-consops-a').on('click', function(){
        // alert(1);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-consops-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-sourcing-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-sourcing-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-onm-a').on('click', function(){
        // alert(1);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-onm-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-assets-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-assets-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-purchase-a').on('click', function(){
        // alert(1);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-purchase-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-hcm-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-hcm-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-finance-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-finance-div').removeClass('d-none-adj');
      });
      $('#smart360-side-nav-admin-a').on('click', function(){
        // alert(2);
        $('.sidebar-wrapper').addClass('d-none-adj');
        $('#smart360-side-nav-admin-div').removeClass('d-none-adj');
      });

      $(document).on('click', '.bento-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      });

    });
  }

}
