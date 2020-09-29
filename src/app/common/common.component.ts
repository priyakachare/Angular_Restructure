import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart360-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('smart360-header, smart360-side-nav, smart360-footer').css('display', 'block');
      function myFunction(x) {
        if (x.matches) {
          $('.main-container').css('margin-left', '60px');
        } else {
          $('.main-container').css('margin-left', '70px');
        }
      }
      var x = window.matchMedia("(max-width: 1599px)")
      myFunction(x);
      x.addListener(myFunction);  
    });
  }

}
