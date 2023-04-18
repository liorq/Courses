import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { Courses } from 'src/app/data/interfaces';
import { DatePickerForm } from 'src/app/data/objects';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
form:any=DatePickerForm
coursesToDisplay!:Courses[];
selectedCourse!:Courses[];
table: any;
selectedOptionObj:any;

constructor(private authSvc:UserInfoService,private courseSvc: CoursesService,private dbSvc:MyDataService){}
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
   this.selectedCourse=this.table.filter((o:any)=>o.name==this.form.coursesName);
   this.form['hours']=this.selectedCourse[0].hours
   this.form.CoursesId=this.selectedCourse[0]!.coursesId
  }

  handleAttendeeReporting(){
  const isAllFieldFilled=Object.values(this.form).filter((field:any)=>field!=="").length==8;
  if(isAllFieldFilled){
    this.handleReportValidation()
  }
}

async handleReportValidation() {
  const isValid = this.isReportValid();
  console.log(isValid ? await this.dbSvc.addAttendeesHandler(this.form) : 'The report is not valid');
}

isReportValid(){
let  isValidAbsence=false;
 let  isValidAttendee=false;
  const currentDate = new Date();
  const startLesson = new Date(this.form['date'] + 'T' + this.form['hours'].split("-")[0]);
  const diffInMinutes = Math.floor((startLesson.getTime() - currentDate.getTime()) / 60000);

  if (diffInMinutes > 10) {
    isValidAbsence=true
    console.log('The current time is more than 10 minutes before the start of the lesson');
  } if (diffInMinutes >= 0 && diffInMinutes <= 10) {
    isValidAbsence=true;
    isValidAttendee=true;
    console.log('The current time is within 10 minutes before the start of the lesson');
  } else {
    isValidAbsence=true
    console.log('The current time is after the start of the lesson');
  }
  const isValidReport = (this.form.Absentee === 'yes' && isValidAbsence) || (this.form.Absentee === 'no' && isValidAttendee);
  return isValidReport;
 }

handleDaySelection(){
  this.form.courseDay= this.courseSvc.getDayOfTheWeek(this.form).toLowerCase()
  this.form.disabled=false;
  this.coursesToDisplay=this.table.filter((o:Courses)=>o.days==this.form.courseDay)
}
handleOptionSelection(value:string,inputName:string){
  this.selectedOptionObj[inputName]=value;

}
}
