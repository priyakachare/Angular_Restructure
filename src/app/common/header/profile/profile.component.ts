import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

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
    { options : 'Logout', link:"#"}
  ] 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
