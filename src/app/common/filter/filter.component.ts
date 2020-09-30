import { Component, OnInit, Input } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterData;
  @Input() buttonData;

  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
    console.log(this.buttonData)
    this.filters = this.filterData;
    this.button = this.buttonData
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
