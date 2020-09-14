import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart360-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationScrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 33,
    scrollbarMaxSize: 99,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
