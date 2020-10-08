import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../../common/filter/filter.service';
import { ComplaintListService } from '../../complaint/complaint-list/complaint-list.service';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import { Subject } from 'rxjs';
import { ComplaintService } from '../complaint.service';


@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
  
})
export class ComplaintListComponent implements OnInit {

complaint: any =[];
dtTrigger: Subject<any> = new Subject();

dtOptions: DataTables.Settings = {};

    dataSet = [
        // {
        //   id: "ajkdaks-saidja-3242-sada",
        //   complaint_id:"99051",
        //   complaint_name: "ABC",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1019",
        //   createdOn: "19-Sep-2020",
          
        // },
        // {
        //   id: "6544-tres-3242-sada",
        //   complaint_id:"99052",
        //   complaint_name: "DEF",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1020",
        //   createdOn: "19-Sep-2020",
        // },
        // {
        //   id: "weq4-trtes-36362-78ad",
        //   complaint_name: "GHI",
        //   complaint_id:"99053",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1021",
        //   createdOn: "19-Sep-2020",
        // },
        // {
        //   id: "23er-treh-5211-34yt",
        //   complaint_id:"99054",
        //   complaint_name: "JKL",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1022",
        //   createdOn: "19-Sep-2020",
        // },
        // {
        //   id: "jkgh-ewrwr-8733-sada",
        //   complaint_id:"99055",
        //   complaint_name: "MNO",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1023",
        //   createdOn: "19-Sep-2020",
        // },
        // {
        //   id: "fsfs-tres-3242-7567",
        //   complaint_id:"99056",
        //   complaint_name: "PQR",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1024",
        //   createdOn: "19-Sep-2020",
        // },
        // {
        //   id: "3455-trtes-36362-yuyu",
        //   complaint_id:"99057",
        //   complaint_name: "STU",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1025",
        //   createdOn: "19-Sep-2020", 
        // },
        // {
        //   id: "23er-treh-5211-34yt",
        //   complaint_id:"99058",
        //   complaint_name: "VWX",
        //   status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
        //   description: "This is a complaint",
        //   complaint_date: "19-Sep-2020",
        //   complaint_no: "1026",
        //   createdOn: "19-Sep-2020",
        // },
        
        
    ]

    blocks = [
        {
            name:       "ID.",
        },
        {
            name:       "Complaint Name",
        },
        {
            name:       "Complaint Type",
        },
        {
          name:       "Complaint Sub Type",
        },
        {
            name:       "Description",
        },
        {
            name:       "Complaint date",
        },
        {
            name:       "Complaint No.",
        },
        {
            name:       "Created on",
        },
        {
            name:       "Action"
        }   
    ]

    
    constructor(private filterService : FilterService, private api:ComplaintService, private complaintListService : ComplaintListService) {
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
    this.getComplaint();
  }

  buttonClicked(event,id){
    event = event || window.event; // IE
    var target = event.target || event.srcElement; // IE
    var id = target.id;
    this.complaintListService.sendButtonEvent(event,id)
  }

 
  getComplaint = () => {
    this.api.getComplaintList().subscribe(
      data => { 
        this.complaint = data;
        this.dtTrigger.next();
      },
      error => {
        console.log(error);
      }
    );

  }

  testing(id){
		console.log(id)
	}

}
