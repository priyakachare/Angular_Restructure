import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from "@angular/router";
import { CommonService } from '../common/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss']
})
export class LoginLogoutComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

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
  
  contentEditable;
  constructor(private router: Router, private commonService:CommonService,private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

  }

  get f() { return this.loginForm.controls; }

  matchingVal;
  id_string;
  roll_privilages;
  loginProcess(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // if form is valid then call the login API
    if(this.loginForm.valid){
      this.commonService.login(this.loginForm.value).subscribe(result =>{
        if(result.state === 'success'){  
          //set token and id string in sessionStorage
          sessionStorage.setItem("UserDetails",JSON.stringify({id_string:result.id_string, token:result.token}))
          this.router.navigateByUrl('/home');           

          // Fetching UserDetail      
          this.commonService.getUserDetails().subscribe(resp => {
            if(resp.state === 'success'){
              console.log('User Details =>'+resp.results.email + "  "+resp.results.created_date)
              }            
            });        
        }
      },
      err =>{
        alert('Provided credentials are wrong.')
      })
    }
  }

  toggleEditable(val) {}

  // send email for reset password
  onSubmit(f: NgForm){
    const resetPasswordObserver = {
      next: x => {
        alert('Password Reset Request Sent\n Please! check your email');
        console.log('Check email');
        this.router.navigateByUrl('/login');
      },
      error: err => {
        alert('Provided credentials are wrong.')
        console.log(err)}
    };
    this.commonService.sendEmail(f.value).subscribe(resetPasswordObserver);
  }

  ngOnInit(): void {

    $(document).ready(function(){
      $('smart360-header, smart360-side-nav, smart360-footer').css('display', 'none');
      $('.main-container').css('margin', '0');
      $('#resetsidebar').click(function(){
      });
    });
  }

}
