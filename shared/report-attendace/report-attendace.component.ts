import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DbService } from 'src/app/core/services/db.service';
import { Courses } from 'src/app/data/interfaces';
import { DatePickerForm } from 'src/app/data/objects';

@Component({
  selector: 'app-report-attendace',
  templateUrl: './report-attendace.component.html',
  styleUrls: ['./report-attendace.component.css'],

})
export class reportAttendanceComponent implements OnInit {
form:any=DatePickerForm
coursesToDisplay!:Courses[];
selectedCourse!:Courses[];
table: any;
selectedOptionObj:any;

constructor(private authSvc:AuthService,private courseSvc: CoursesService, public dbSvc: DbService
){}
async ngOnInit() {
 this.courseSvc._tablesData.subscribe((updateData)=>{
  this.table=updateData.myCourses;
 })

await this.loadTableData()
}
async loadTableData(){
  const isLoadDataNeeded =this.authSvc.isUserLoggedIn()&& this.table?.length == 0
  if (isLoadDataNeeded) {
    const [CoursesData, UsersData, attendees, myCourses] = await this.dbSvc.getAllTablesData()
    this.courseSvc.initTablesDataSubject(CoursesData,UsersData,attendees, myCourses);
  }
}
handleCourseSelection(){
 this.courseSvc.handleCourseSelection(this)
  }
  handleAttendeeReporting(){
    this.courseSvc.handleAttendeeReporting(this)
}
handleDaySelection(){
  this.courseSvc.handleDaySelection(this)
}
}
