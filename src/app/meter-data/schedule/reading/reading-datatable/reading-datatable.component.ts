import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../../common/filter/filter.service';
import { ReadingService } from '../../../../meter-data/schedule/reading/reading.service'
import { faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reading-datatable',
  templateUrl: './reading-datatable.component.html',
  styleUrls: ['./reading-datatable.component.scss']
})

export class ReadingDatatableComponent implements OnInit {

  faPen=faPen;

  dtOptions: DataTables.Settings = {};

  // Table Heading Parameter
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


  // Called first time before the ngOnInit()
  // Used For Calling Services
  constructor(private filterService : FilterService, private readingService : ReadingService) {
    this.getPagination();
    this.getSearchText();
    this.getReadingDatatable();
  }

  // For Pagination
  getPagination = () => {
    this.filterService.getPagination().subscribe(
      data => {
        $('#table1').DataTable().page.len(data.number).draw()
      },
      error => {
        console.log(error)
      }
    )
  }

  // For Search Text
  getSearchText = () => {
    this.filterService.getSearchText().subscribe(
      data => {
        $('#table1').DataTable().search(data.text).draw()
      },
      error => {
        console.log(error)
      }
    )
  }

  // Use for store data come from API
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
    }
  ]

  // For Getinng Datatable Records
  getReadingDatatable = () => {
    this.readingService.getReadingDatatable().subscribe(
      data => {
        for (var value of data.results) {
          this.dataSet.push(
            {
              id: value.id_string,
              month: value.bill_month,
              cycle: value.bill_cycle_id.code,
              area: "Area 1",
              subarea: "Sub Area 1",
              status: ['success', 'pending', 'rejected'].sort((a, b) => .5 - Math.random())[0],
              type: value.schedule_type_id.name,
              consumers: "1000",
              start_date: "19-Sep-2020",
              end_date: "19-Dec-2020",
              name : "Name 1"
            }
          );
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  // Called after the constructor
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
