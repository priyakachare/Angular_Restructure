import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../../common/filter/filter.service';
import { faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reading-datatable',
  templateUrl: './reading-datatable.component.html',
  styleUrls: ['./reading-datatable.component.scss']
})
export class ReadingDatatableComponent implements OnInit {

  faPen=faPen;

  dtOptions: DataTables.Settings = {};

  blocks = [
    {
      name :  "Month",
    },
    {
      name :  "Cycle",
    },
    {
      name :  "Area",
    },
    {
      name :  "Sub Area",
    },
    {
      name :  "Status",
    },
    {
      name :  "Type",
    },
    {
      name :  "Consumers",
    },
    {
      name :  "Start Date",
    },
    {
      name :  "End Date",
    },
    {
      name :  "Action"
    }   
]

  dataSet = [
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202003",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    {
      id: "ajkdaks-saidja-3242-sada",
      month: "202004",
      cycle: "21",
      area: "Area 1",
      subarea: "Sub Area 1",
      status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
      type: "Type 1",
      consumers: "1000",
      start_date: "19-Sep-2020",
      end_date: "19-Dec-2020",
      name : "Name 1"
    },
    
]

  constructor(private filterService : FilterService) {
    this.filterService.getPagination().subscribe(data=>{
      $('#table1').DataTable().page.len(data.number).draw()
    })

    this.filterService.getSearchText().subscribe(data=>{
      $('#table1').DataTable().search(data.text).draw()
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      ordering:true,
      pagingType:'full_numbers',
      }
  }

  view_schedule(id){
		console.log(id)
	}
}
