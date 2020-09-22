import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss']
})
export class LoginLogoutComponent implements OnInit {

  public logindiv:boolean = true;
  login() {
    this.logindiv = true;
    this.signupdiv = false;
    this.forgotpwddiv = false;
    this.resetpwddiv = false;
  }
  public signupdiv:boolean = false;
  signup() {
    this.signupdiv = true;
    this.logindiv = false;
    this.forgotpwddiv = false;
    this.resetpwddiv = false;
  }
  public forgotpwddiv:boolean = false;
  forgotpwd() {
    this.forgotpwddiv = true;
    this.logindiv = false;
    this.signupdiv = false;
    this.resetpwddiv = false;
  }
  public resetpwddiv:boolean = false;
  resetpwd() {
    this.resetpwddiv = true;
    this.logindiv = false;
    this.signupdiv = false;
    this.forgotpwddiv = false;
  }

  showpwd1:boolean = false; 
  showpwd2:boolean = false;
  showpwd3:boolean = false;
  showpwd4:boolean = false;
  showhidepwd1() {
    this.showpwd1 = !this.showpwd1;
  }
  showhidepwd2() {
    this.showpwd2 = !this.showpwd2;
  }
  showhidepwd3() {
    this.showpwd3 = !this.showpwd3;
  }
  showhidepwd4() {
    this.showpwd4 = !this.showpwd4;
  }
  
  constructor(private router: Router) { }
  ngOnInit(): void {
    $(document).ready(function(){
      $('smart360-header, smart360-side-nav, smart360-footer').css('display', 'none');
      $('.main-container').css('margin', '0');
      $('#resetsidebar').click(function(){
      });
    });
  }

}
