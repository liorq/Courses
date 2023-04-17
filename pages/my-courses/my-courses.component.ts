import { Component } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { ClassAttendeesDisplayedColumns, ClassAttendees, ClassAttendeesColumns, CoursesColumns, CoursesDisplayedColumns, ModalCoursesColumns, myCoursesDisplayedColumns, myCoursesColumns } from '../../data/arrays';
import { MyDataService } from 'src/app/core/services/db.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  constructor(private courseSvc: CoursesService,private dbSvc:MyDataService){}

  table!:any[];
  CoursesDisplayedColumns=myCoursesDisplayedColumns
  CoursesColumns =myCoursesColumns
  ModalColumns=ModalCoursesColumns;


 async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.myCourses;
    })
    await this.getMyCourses()
  }

 async getMyCourses(){
 const allMyCourses= await this.dbSvc.getAllUserCourses()
 if(Array.isArray(allMyCourses)){
     this.courseSvc.addIconsBtn(allMyCourses)

 this.table=allMyCourses;
}
  }

}
