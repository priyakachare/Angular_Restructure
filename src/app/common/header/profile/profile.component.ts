import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from '../../common.service';

@Component({
  selector: 'smart360-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faMapMarkerAlt = faMapMarkerAlt;
  faBell = faBell;
  faPlus = faPlus;

  profile = { data: [
    {name : 'Dejan Shelby',
    email: 'dejan128@gmail.com',
    img : '../../../assets/images/profile-pic.png'   
    }] ,
  links : [
    { options : 'ESS', link:"#"},
    { options : 'Helpdesk', link:"#"},
    { options : 'Help', link:"#"},
    { options : 'Change Password', link:"change-password"},
    { options : 'Logout', link:"#"}
  ] 
  };

  id_string;
  constructor(private commonService:CommonService,private router:Router) { }
  selectItem(selectedVal){
    //get value of token and id string from sessionStorage
   var userDetail = JSON.parse(sessionStorage.getItem("UserDetails"))   
   this.id_string = userDetail.id_string

    if(selectedVal === 'Logout'){
      this.commonService.logOut(this.id_string).subscribe(data =>{
        if(data.state === "success"){
          sessionStorage.removeItem("UserDetails")
          this.router.navigateByUrl('/login'); 
        }
      })
    }
    else if(selectedVal === 'Change Password'){
      this.router.navigateByUrl('/change-password'); 
    }
  }
  ngOnInit(): void {
  }

}
