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
    {id: 1, module : 'Sales & Marketing',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 2 ,module : 'Consumer Care',img : this.path +'bento-menu-2.png',img1: this.imgpath +'bento-menu-bg-2.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 3, module : 'Consumer Ops',img : this.path +'bento-menu-3.png',img1: this.imgpath +'bento-menu-bg-1.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 4, module : 'Gas Management',img : this.path +'bento-menu-4.png',img1: this.imgpath +'bento-menu-bg-3.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 5, module : 'Work Order',img : this.path +'bento-menu-5.png',img1: this.imgpath +'bento-menu-bg-4.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 6, module : 'Network',img : this.path +'bento-menu-6.png',img1: this.imgpath +'bento-menu-bg-5.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 7, module : 'Spend',img : this.path +'bento-menu-7.png',img1: this.imgpath +'bento-menu-bg-6.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 8, module : 'Human Capital',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 9, module : 'Finance',img : this.path +'bento-menu-9.png',img1: this.imgpath +'bento-menu-bg-9.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
    {id: 10,module : 'Admin',img : this.path +'bento-menu-1.png',img1: this.imgpath +'bento-menu-bg-1.png',desc : 'Lorem ipsum dolor sit amet',desc1: 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '},
  ] };

  constructor(private getData:CommonService) { }

  selectedVal;
  mouseHovered(val) {
    this.selectedVal = this.modulesList.data.find(data => data.id === +val)    
  }
  
  getSideNavData(val){
    this.getData.newItemEvent.emit(val);
  }

  // public tab: any;

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
