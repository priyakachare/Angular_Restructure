import { Component } from '@angular/core';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedVal:string;
  constructor(private getData:CommonService) {
    this.getData.newItemEvent.subscribe(data =>{
      this.selectedVal = data
    })
   }
}
