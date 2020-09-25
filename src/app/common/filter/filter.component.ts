import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private filterService : FilterService) {
    this.filterService.filterEvent.subscribe(data=>{
      this.filters = data
    })
    this.filterService.buttonEvent.subscribe(data=>{
      this.button = data
    })
  }

  ngOnInit(): void {
  }

  filters = []
  button : any;

  selected:any;
  searchText:string;
  selectedPagination:any;
  date: {year: number, month: number};
  faCalendarAlt = faCalendarAlt;


  keypress(){
      this.filterService.sendSearchText(this.searchText)
  }

  recordsChange(){
    this.filterService.sendPagination(this.selectedPagination)
  }

} 
