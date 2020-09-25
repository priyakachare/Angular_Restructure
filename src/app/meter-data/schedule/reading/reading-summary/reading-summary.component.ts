import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../common/dashboard/dashboard.service';

@Component({
  selector: 'app-reading-summary',
  templateUrl: './reading-summary.component.html',
  styleUrls: ['./reading-summary.component.scss']
})
export class ReadingSummaryComponent implements OnInit {

  constructor(private dashboardService:DashboardService) {
  }

  ngOnInit(): void {
    this.sendDashboardData()
  }

  sendDashboardData(){
    this.dashboardService.DashboardEvent.emit(this.blocks);
  }

  
  imageUrls = {
    new_image : '../../assets/images/dashboard-card-img1.png',
    expire_image : '../../assets/images/dashboard-card-img2.png',
    discontineud_image : '../../assets/images/dashboard-card-img3.png',
    contract_image : '../../assets/images/dashboard-card-img3.png'
  }

  blocks = [
    {
      name : 'Total',
      img : this.imageUrls.new_image,
      count : '500',
      class : 'badge badge-pill badge-label-finished',
      default : 'Schedule'
    },
    {
      name : 'Not Dispatch',
      img : this.imageUrls.expire_image,
      count : '100',
      class : 'badge badge-pill badge-label-unfinished',
      default : 'Schedule'
    },
    {
      name : 'In Progress',
      img : this.imageUrls.discontineud_image,
      count : '200',
      class : 'badge badge-pill badge-label-pending',
      default : 'Schedule'
    },
    {
      name : 'Upload',
      img : this.imageUrls.contract_image,
      count : '200',
      class : 'badge badge-pill badge-label-rejected',
      default : 'Schedule'
    },
  ]
}
