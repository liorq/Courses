import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
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
coursesToDisplay:any;
selectedCourse:any;
table: any;
selectedOptionObj:any={lior:''};

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
getDayOfTheWeek(){
   return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(this.form['date']));
}

selectCourse(){
  this.selectedCourse=this.table.filter((o:any)=>o.name==this.form.coursesName);
  this.form['hours']=this.selectedCourse[0].hours
   this.form.CoursesId=this.selectedCourse[0].coursesId

  }
AttendeeReportingHandler(){
  const isAllFieldFilled=Object.values(this.form).filter((field:any)=>field!=="").length==8;
  if(isAllFieldFilled){
    this.isValidReport()
  }
}

async isValidReport() {
  ///selectChoice
  ///isValidAbsence חיסור
  ///   isValidAttendee=false; הגעה בזמן

 let  isValidAbsence=false;
 let  isValidAttendee=false;

  const currentDate = new Date();
  const startLesson = new Date(this.form['date'] + 'T' + this.form['hours'].split("-")[0]);

  const diffInMinutes = Math.floor((startLesson.getTime() - currentDate.getTime()) / 60000);

  if (diffInMinutes > 10) {
    ////
    isValidAbsence=true
    console.log('The current time is more than 10 minutes before the start of the lesson');
    ///חיסור רק
  } if (diffInMinutes >= 0 && diffInMinutes <= 10) {
    isValidAbsence=true;
    isValidAttendee=true;
        ///חיסור או איחור
    console.log('The current time is within 10 minutes before the start of the lesson');
  } else {
    isValidAbsence=true
            ///חיסור
    console.log('The current time is after the start of the lesson');
  }
  const isFormAbsentee =this.form.Absentee=='yes'&&isValidAbsence||this.form.Absentee=='no'&&isValidAttendee

  if(isFormAbsentee)
  console.log(await this.dbSvc.addAttendeesHandler(this.form));
else
console.log('The report is not valid');
}
SelectDayHandler(){
  this.form.courseDay= this.getDayOfTheWeek().toLowerCase()
  this.form.disabled=false;
  this.coursesToDisplay=this.table.filter((o:any)=>o.days==this.form.courseDay)
}
onOptionSelected(value:string,inputName:string){
  this.selectedOptionObj[inputName]=value;

}
}
