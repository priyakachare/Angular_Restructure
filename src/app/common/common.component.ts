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
    });
  }

}
