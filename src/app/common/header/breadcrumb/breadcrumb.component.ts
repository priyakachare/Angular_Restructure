import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart360-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadCrumbVal:any;

  constructor() { }

  ngOnInit(): void {
  }

}
