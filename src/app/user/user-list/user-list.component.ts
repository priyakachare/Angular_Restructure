import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { FilterService } from '../../common/filter/filter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  faPen = faPen;
  dtOptions: DataTables.Settings = {};

    dataSet = []

    blocks = [
        {
            name:       "User ID",
        },
        {
            name:       "Name",
        },
        {
            name:       "Mobile no.",
        },
        {
          name:       "Status",
        },
        {
            name:       "Email",
        },
        {
            name:       "Utility",
        },
        {
            name:       "City",
        },
        {
            name:       "Department",
        },
        {
            name:       "Role",
        },
        {
            name:       "Action"
        }   
    ]
    
    constructor(private filterService : FilterService, private userService:UserService) {
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
      
      this.userService.getUserListData().subscribe(result =>{
        this.dataSet = result.results
      })
      
	}

	testing(id){
		console.log(id)
	}


}
