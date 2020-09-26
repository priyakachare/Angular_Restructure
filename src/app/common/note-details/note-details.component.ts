import { Component, OnInit, Input } from '@angular/core'; 
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  @Input() data;

  faPlus = faPlus;
  faPrint = faPrint

  notes = []

  constructor() { }

  ngOnInit(): void {
    this.notes = this.data
  }

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

}
