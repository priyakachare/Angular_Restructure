import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {


	dtOptions: DataTables.Settings = {};

    dataSet = [
        {
          id: "ajkdaks-saidja-3242-sada",
          name: "Akshay Kumar",
          registrationNo: "NSC1992425",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "201-285-6456",
          area: "Area 1",
          source: "Branch",
          createdOn: "19-Sep-2020",
          category:"PNG",
          subCategory:"Domestic",
        },
        {
          id: "6544-tres-3242-sada",
          name: "Chinmay Kumar",
          registrationNo: "NSC1992430",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "596-285-3781",
          area: "Area 9",
          source: "Branch",
          createdOn: "21-Sep-2020",
          category:"PNG",
          subCategory:"Domestic", 
        },
        {
          id: "weq4-trtes-36362-78ad",
          name: "Kangana ranaut",
          registrationNo: "NSC1992431",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "89-255-9846",
          area: "Area 5",
          source: "Mobile app",
          createdOn: "21-Sep-2020",
          category:"PNG",
          subCategory:"Individual", 
        },
        {
          id: "23er-treh-5211-34yt",
          name: "Virat Kohli",
          registrationNo: "NSC1992432",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "82-255-9846",
          area: "Area 2",
          source: "Mobile app",
          createdOn: "22-Sep-2020",
          category:"PNG",
          subCategory:"Individual", 
        },
        {
          id: "jkgh-ewrwr-8733-sada",
          name: "Tiger Kumar",
          registrationNo: "NSC1992419",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "88-285-7666",
          area: "Area 1",
          source: "Branch",
          createdOn: "19-Sep-2020",
          category:"PNG",
          subCategory:"Domestic",
        },
        {
          id: "fsfs-tres-3242-7567",
          name: "Chinmay Pant",
          registrationNo: "NSC1992488",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "87-853-2555",
          area: "Area 9",
          source: "Branch",
          createdOn: "21-Sep-2020",
          category:"PNG",
          subCategory:"Domestic", 
        },
        {
          id: "3455-trtes-36362-yuyu",
          name: "Kangana Patil",
          registrationNo: "NSC1992487",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "892-255-4545",
          area: "Area 5",
          source: "Mobile app",
          createdOn: "21-Sep-2020",
          category:"PNG",
          subCategory:"Individual", 
        },
        {
          id: "23er-treh-5211-34yt",
          name: "Hemant Kohli",
          registrationNo: "NSC1992433",
          status: ['Approved', 'Pending', 'Rejected'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "77-255-3431",
          area: "Area 2",
          source: "Mobile app",
          createdOn: "22-Sep-2020",
          category:"PNG",
          subCategory:"Individual", 
        },
        
    ]

    blocks = [
        {
            name:       "Registration no.",
        },
        {
            name:       "Name",
        },
        {
            name:       "Status",
        },
        {
            name:       "Mobile no.",
        },
        {
            name:       "Category",
        },
        {
            name:       "Sub category",
        },
        {
            name:       "Area",
        },
        {
            name:       "Source",
        },
        {
            name:       "Created on",
        },
        {
            name:       "Action"
        }
        
    ]

    


    constructor() { }

    ngOnInit(): void {

    	this.dtOptions = {
    		ordering:true,
    		pagingType:'full_numbers',
    		// rowCallback: (row: Node, data: any[] | Object, index: number) => {
    		// 	$('.action', row).unbind('click');
		    //     $('.action', row).bind('click', () => {
		    //     	console.log()
		    //     });
		        
		    //     return row;
		    // }
    	}

    	// $('#table1').DataTable( {
    		
		   //    pagingType: 'full_numbers',
		   //    paging: true,
		   //    ordering: true,
		   //    data: this.dataSet,
		   //    // columns: [
		   //    //   { "title": "Registration no.", "data":"registrationNo", "className":"foo"},
		   //    //   { "title": "Name", "data":"name"},
		   //    //   { "title": "Status", "data":"status"},
		   //    //   { "title": "Mobile no.", "data":"mobileNo"},
		   //    //   { "title": "Category", "data":"category"},
		   //    //   { "title": "Sub Category", "data":"subCategory"},
		   //    //   { "title": "Area", "data":"area"},
		   //    //   { "title": "Source", "data":"source"},
		   //    //   { "title": "Created on", "data":"createdOn"},
		   //    // ],
		   //    lengthMenu: [ 10, 12, 25, 50, 75, 100 ],
		   //    pageLength: 12,
		   //  });

		    // var table = $('#table1').DataTable();

		    
		 //    $('#table1').on('click', 'tbody td', function (e) {
		 //    	var el = document.getElementById("rock");
		 //    	var row = $('#table1').DataTable().row(this)
		    	
		 //    	console.log(e)     

			// } );
		    
	}

	testing(id){
		console.log(id)
	}

}
