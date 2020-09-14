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
      module : 'Spend',
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
  imgpath ="../../../assets/images/";
  Detail = [ 
    {
      module : 'Sales & Marketing',
      img: this.imgpath +'bento-menu-bg-1.png',
      desc : 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
    }
  ]

  mouseHovered(val) {
    if(val == "Sales & Marketing"){
      this.Detail = [ 
        {
          module : 'Sales & Marketing',
          img: this.imgpath +'bento-menu-bg-1.png',
          desc : 'Sales & Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Consumer Care"){
      this.Detail = [ 
        {
          module : 'Consumer Care',
          img: this.imgpath +'bento-menu-bg-2.png',
          desc : 'Consumer Care Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Consumer Ops"){
      this.Detail = [ 
        {
          module : 'Consumer Ops',
          img: this.imgpath +'bento-menu-bg-1.png',
          desc : 'Consumer Ops Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Gas Management"){
      this.Detail = [ 
        {
          module : 'Gas Management',
          img: this.imgpath +'bento-menu-bg-3.png',
          desc : 'Gas Management Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Work Order"){
      this.Detail = [ 
        {
          module : 'Work Order',
          img: this.imgpath +'bento-menu-bg-4.png',
          desc : 'Work Order Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Network"){
      this.Detail = [ 
        {
          module : 'Network',
          img: this.imgpath +'bento-menu-bg-5.png',
          desc : 'Network Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Spend"){
      this.Detail = [ 
        {
          module : 'Spend',
          img: this.imgpath +'bento-menu-bg-6.png',
          desc : 'Spend Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Human Capital"){
      this.Detail = [ 
        {
          module : 'Human Capital',
          img: this.imgpath +'bento-menu-bg-1.png',
          desc : 'Human Capital Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Finance"){
      this.Detail = [ 
        {
          module : 'Finance',
          img: this.imgpath +'bento-menu-bg-7.png',
          desc : 'Finance Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
    else if(val == "Admin"){
      this.Detail = [ 
        {
          module : 'Admin',
          img: this.imgpath +'bento-menu-bg-1.png',
          desc : 'Admin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Indicant '
        }
      ]
    }
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
