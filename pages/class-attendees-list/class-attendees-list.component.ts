import { Component } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { ClassAttendees, ClassAttendeesColumns, ClassAttendeesDisplayedColumns, CoursesColumns, CoursesDisplayedColumns, ModalCoursesColumns } from 'src/app/data/arrays';

@Component({
  selector: 'app-class-attendees-list',
  templateUrl: './class-attendees-list.component.html',
  styleUrls: ['./class-attendees-list.component.css']
})
export class ClassAttendeesListComponent {
  constructor(private dbSvc:MyDataService,private courseSvc: CoursesService){}

  table:any[]=[];
  CoursesDisplayedColumns=ClassAttendeesDisplayedColumns
  CoursesColumns =ClassAttendees
  ModalColumns=ClassAttendeesColumns;


  async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.attendees;
    })
    await this.getAllUsersAttendees()
  }
  async getAllUsersAttendees(){
    this.table=await this.dbSvc.getAllUsersAttendees()
  }
}