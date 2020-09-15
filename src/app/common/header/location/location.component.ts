import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  location = 'Pune'

  constructor() { }

  ngOnInit(): void {
  }

}
