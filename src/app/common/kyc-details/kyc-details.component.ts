import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.component.html',
  styleUrls: ['./kyc-details.component.scss']
})
export class KycDetailsComponent implements OnInit {

  @Input() data;
  kycDocs = []

  constructor() { }

  ngOnInit(): void {
  	this.kycDocs = this.data
  }

}
