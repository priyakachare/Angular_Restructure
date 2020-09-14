import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'smart360-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faPlus = faPlus;

  @Input() item: string;

  constructor() {    
  }

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn2").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".menubttn").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
      $("body").toggleClass("hide-popover");
  }

  ngOnInit(): void {
    $(document).ready(function(){

      $(".menubttn2").parents(".pr-side-navbar").removeClass("open-slide");
      $(".menubttn").parents(".pr-side-navbar").removeClass("open-slide");    
      $('.menubttn2').click(function(){
        $(this).toggleClass('open');
      });

      // For modal close on cross click
      $('.modal').find('.close').on('click', function() {
        $(this).parents('.modal').removeClass('show');
      });  
    });
  }  

}
