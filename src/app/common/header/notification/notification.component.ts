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

  notifications = { data: [
    {
      type : 'Complaint Resolved!',
      status:'New', desc:'Lorem ipsum dolor sit amet, consectetur adipisciel Videmusne ut',
      date:'01 Jan 2020',
      pay_due : 'Payment Due',
      day:'Yesterday'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
