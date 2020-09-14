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

  @Input() item: string
  
  snmNav = [
    {val : 'Sales & Marketing'},
    {val : 'Sales & Marketing'},
    {val : 'Sales & Marketing'},
    {val : 'Sales & Marketing'},
    {val : 'Sales & Marketing'},
  ]

  constructor() {

    
  }

  val = ""

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn2").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".menubttn").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
      $("body").toggleClass("hide-popover");
  }

  ngOnInit(): void {
    if(this.item == 'Consumer Care' ){

      this.snmNav.push({
        val:this.val
      })
      console.log('++++++++++++'+this.snmNav)

    }
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
