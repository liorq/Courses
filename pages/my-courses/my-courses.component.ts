import { Component } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { ClassAttendeesDisplayedColumns, ClassAttendees, ClassAttendeesColumns, CoursesColumns, CoursesDisplayedColumns, ModalCoursesColumns, myCoursesDisplayedColumns, myCoursesColumns } from '../../data/arrays';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  constructor(private courseSvc: CoursesService){}

  table!:any[];
  CoursesDisplayedColumns=myCoursesDisplayedColumns
  CoursesColumns =myCoursesColumns
  ModalColumns=ModalCoursesColumns;


  ngOnInit(): void {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.myCourses;
    })
  }
}
