import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-timeline-details',
  templateUrl: './timeline-details.component.html',
  styleUrls: ['./timeline-details.component.scss']
})
export class TimelineDetailsComponent implements OnInit {

  @Input() data

  timeLine = []

  constructor() { }

  ngOnInit(): void {
  	this.timeLine = this.data
  }

}
