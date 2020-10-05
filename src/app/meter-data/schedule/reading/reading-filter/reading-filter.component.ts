import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../../common/filter/filter.service';

@Component({
  selector: 'app-reading-filter',
  templateUrl: './reading-filter.component.html',
  styleUrls: ['./reading-filter.component.scss']
})
export class ReadingFilterComponent implements OnInit {

  constructor(private filterService : FilterService) { }

  ngOnInit(): void {
    this.sendFiltersData()
    this.sendButtonData()
  }

  sendFiltersData(){
    // this.filterService.filterEvent.emit(this.filters);
  }

  sendButtonData(){
    // this.filterService.buttonEvent.emit(this.button);
  }

  button = {
    name : 'SCHEDULE',
    routerLink : '/registration/add-registration'
  }

  filters = [
    {
      name : 'Utility',
      placeholder : 'Select Utility',
      selectedValue : '',
      options : [
        {id: 1, name: 'Utility 1'},
        {id: 2, name: 'Utility 2'},
      ]
    },
    {
      name : 'Month',
      placeholder : 'Select Month',
      selectedValue : '',
      options : [
        {id: 1, name: 'April'},
        {id: 2, name: 'MAy'},
      ]
    },
    {
      name : 'Cycle',
      placeholder : 'Select Cycle',
      selectedValue : '',
      options : [
        {id: 1, name: '15'},
        {id: 2, name: '21'},
      ]
    },
    {
      name : 'Area',
      placeholder : 'Select area',
      selectedValue : '',
      options : [
        {id: 1, name: 'Area 1'},
        {id: 2, name: 'Area 2'},
      ]
    },
    {
      name : 'Sub area',
      placeholder : 'Select sub area',
      selectedValue : '',
      options : [
        {id: 1, name: 'Sub area 1'},
        {id: 2, name: 'Sub area 2'},
      ]
    },
    {
      name : 'Status',
      placeholder : 'Select status',
      selectedValue : '',
      options : [
        {id: 1, name: 'Status 1'},
        {id: 2, name: 'Status 2'},
      ]
    },
    {
      name : 'Schedule Type',
      placeholder : 'Select Schedule Type',
      selectedValue : '',
      options : [
        {id: 1, name: 'Manual'},
        {id: 2, name: 'Photo Meter'},
      ]
    },
    {
      name : 'Category',
      placeholder : 'Select category',
      selectedValue : '',
      options : [
        {id: 1, name: 'Category 1'},
        {id: 2, name: 'Category 2'},
      ]
    },
    {
      name : 'Sub Category',
      placeholder : 'Select sub category',
      selectedValue : '',
      options : [
        {id: 1, name: 'Sub category 1'},
        {id: 2, name: 'Sub category 2'},
      ]
    },
  ]
}
