import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  @Input() data1;
  @Input() data2;

  static : any;

  paymentData = []

  constructor() { }

  ngOnInit(): void {
  	this.static = this.data1
  	this.paymentData = this.data2
  }

}
