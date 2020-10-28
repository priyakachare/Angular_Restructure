import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { NoteDetailsService } from '../note-details/note-details.service';
declare var $:any

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  @Input() data;

  notes = []
  faPlus = faPlus;
  faPrint = faPrint
  color : String = "notes-card colr1"
  note : any;
  noteName : any;
  response : any;

  constructor(private noteService : NoteDetailsService) { }

  ngOnInit(): void {
    this.notes = this.data
    console.log()
  }

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

  changeColor(e) {
    this.color = e.target.defaultValue;
  }

  onNoteChange(e){
    this.note = e.target.value;
    $("#note-error").hide()
  }

  onNoteTitleChange(e){
    this.noteName = e.target.value;
    $("#note-title-error").hide()
  }

  addNote(){
    if((this.note == null || this.note == "") && (this.noteName == null || this.noteName == "")){
      $("#note-error").show()
      $("#note-title-error").show()
    }else{
      this.response = {
        note : this.note,
        note_color : this.color,
        note_name : this.noteName
      }
      this.noteService.sendNoteResponse(this.response)
    }
  }

}
