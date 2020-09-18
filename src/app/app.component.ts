import { Component } from '@angular/core';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedVal;
  navList;
  openSideNav;
  showPopUp;
  meterData;
  settingSnm;


  constructor(private getData:CommonService) {
    //for open slider on click 
    this.meterData ={title:'Meter Data' ,data :[
      {id:1,navData:'Schedule',link:'#'},{id:2,navData:'Dispatch',link:'#'},{navData:'Validation',link:'#'},
      {navData:'Upload',link:'#'},{navData:'Smart Meter Data',link:'#'}
    ]};

    this.settingSnm ={title:'Settings' ,data :[
      {id:1,navData:'Survey Type',link:'#'},{id:2,navData:'Campaign Type',link:'#'},{navData:'Campaign Frequency Type',link:'#'},
    ]};
    
    this.getData.sideNavId.subscribe(data =>{
      this.openSideNav = data
      if(this.selectedVal==3 && this.openSideNav==4){
        console.log('--------------'+this.selectedVal + this.openSideNav)
        this.showPopUp = !this.showPopUp
        this.meterData = this.meterData
      }
      else if(this.selectedVal==1 && this.openSideNav==8||this.selectedVal==undefined && this.openSideNav==8){
        this.showPopUp = !this.showPopUp
        this.meterData = this.settingSnm
      }
    })  

       }    
}
