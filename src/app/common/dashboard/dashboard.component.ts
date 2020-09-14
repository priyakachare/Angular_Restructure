import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../common/dashboard/dashboard.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) {
    this.dashboardService.DashboardEvent.subscribe(data =>{
      this.blocks = data
    })
  }

  ngOnInit(): void {
  }

  blocks = []

}
