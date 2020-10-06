import { Component, OnInit, Input } from '@angular/core';
import { PaymentDetailsService } from './payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  static : any;

  paymentData = []

  constructor(private paymentDetailsService : PaymentDetailsService) {
    this.paymentDetailsService.getPayments().subscribe(resp=>{
      this.paymentData = resp['payments']
    })
  }

  ngOnInit(): void {
  	
  }

}
