import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { CommonService} from '../common.service';


@Component({
  selector: 'smart360-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
  
  constructor(private getData:CommonService) {
    this.getData.newItemEvent.subscribe(data =>{
      this.selectedVal = data
      console.log(data)
    })
   }

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


  public tab: any;

  selectedVal:any;

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
