import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor() {
  	for (var i = 0; i < 50; i++) {
      this.data.push(
        {
          id: i + '1',
          data1: 'NSC125' + i,
          data2: ['Charles', 'Paul', 'Alex', 'Emma', 'Travis'].sort((a, b) => .5 - Math.random())[0],
          data3: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          data4: "201-285-6456",
          data5: ['Category 1', 'Category 2', 'Category 3'].sort((a, b) => .5 - Math.random())[0],
          data6: ['Sub Category 1', 'Sub Category 2', 'Sub Category 3'].sort((a, b) => .5 - Math.random())[0],
          data7: ['Area 1', 'Area 2'].sort((a, b) => .5 - Math.random())[0],
          data8: new Date(),
        }
      );
    }
  }

  ngOnInit(): void {
  }

  dtOptions2 = {}

  columns = [
  	{
  		name : 'Registration no.'
  	},
  	{
  		name : 'Name'
  	},
  	{
  		name : 'Status'
  	},
  	{
  		name : 'Mobile no.'
  	},
  	{
  		name : 'Category'
  	},
  	{
  		name : 'Sub category'
  	},
  	{
  		name : 'Area'
  	},
  	{
  		name : 'Created on'
  	},
  ]

  data = []

}
