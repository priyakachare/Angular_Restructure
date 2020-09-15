import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch, faMapMarkerAlt, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faMapMarkerAlt = faMapMarkerAlt;
  faBell = faBell;
  faPlus = faPlus;

  addMenus = { data: [
    {module : 'Registration',link:'#'},
    {module : 'Survey',link:'#'},
    {module : 'Campaign',link:'#'}] 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
