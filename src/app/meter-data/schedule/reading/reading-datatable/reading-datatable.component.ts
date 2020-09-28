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
  dataSet = []

  // For Getinng Datatable Records
  getReadingDatatable = () => {
    this.readingService.getReadingDatatable().subscribe(
      data => {
        console.log(data.results)
        for (let value of data.results) {
          this.dataSet.push(
            {
              id: value.id_string,
              month: value.bill_month,
              cycle: value.bill_cycle_id.code,
              area: "Area 1",
              subarea: "Sub Area 1",
              status: [value.schedule_status_id.name],
              type: value.schedule_type_id.name,
              consumers: "1000",
              start_date: value.start_date,
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
