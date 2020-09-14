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

  constructor() { }

  ngOnInit(): void {
  }

}
