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
  }

  ngOnInit(): void {
  }

  filters = []

  selected:any;
  date: {year: number, month: number};
  faCalendarAlt = faCalendarAlt;

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

} 
