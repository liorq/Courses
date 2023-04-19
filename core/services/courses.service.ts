import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { openModalAndGetInput, getAddForm } from 'src/app/data/forms';
import { Courses } from 'src/app/data/interfaces';
import {  addIcon, buyIcon, deleteIcon, messages } from 'src/app/data/objects';
import { reportAttendanceComponent } from 'src/app/shared/report-attendace/report-attendace.component';
import { GenericTableComponent } from 'src/app/shared/generic-table/generic-table.component';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private tablesData:BehaviorSubject<any>=new BehaviorSubject({CoursesData:[],UsersData:[],attendees:[],myCourses:[]})
  private isNavBarVisible = new BehaviorSubject<boolean>(true);
  _tablesData=this.tablesData.asObservable()
  _isNavBarVisible = this.isNavBarVisible.asObservable();

   toggleNavBar(Status:boolean): void {
    this.isNavBarVisible.next(Status);
  }

  updateTablesDataSubject(newValue:any){
    this.tablesData.next(newValue)
  }

  initTablesDataSubject(CoursesData:any,UsersData:any,attendees:any,myCourses:any){
    this.tablesData.next({CoursesData:CoursesData,UsersData:UsersData,attendees:attendees,myCourses:myCourses})
  }


  addIconsBtn(array:any[]){
 for(let item of array)  {
  item.add=addIcon
  item.delete=deleteIcon
  item.buy=buyIcon
  }
  }

   removeRow(obj: any) {
    const data = this.tablesData.getValue();
    const arrays = ['CoursesData', 'UsersData', 'myCourses', 'attendees'];
    for (let key of arrays) {
      data[key] = data[key].filter((o:any) => o !== obj);
    }
    this.tablesData.next(data);
  }

  async buyCourseHandler(element:any,component:GenericTableComponent){

    const response:any=await component.dbSvc.buyCourseHandler({...element,StudentId:'admin'})
    if (response && response?.status !== 400) {
      const data = this.tablesData.getValue();
      data.myCourses.push(response);
      this.updateTablesDataSubject(data);
    }

    Swal.fire(response?.status !== 400?messages.boughtSuccessfully:messages.FailedToPurchase);
  }

  async AddPropertyHandler(component: GenericTableComponent ) {
    const isStudent = component.tableObj?.componentName === 'StudentComponent';
    component.isDeleteModalOpen?await this.deleteHandler(component,isStudent):await  this.addHandler(component,isStudent)
    component.dataSource._updateChangeSubscription();
  }
 async deleteHandler(component:GenericTableComponent,isStudent:boolean){
  const id = isStudent ? component.selectedRow?.username : component.selectedRow?.coursesId;
  await (isStudent ? component.dbSvc.removeUserHandler(id) : component.dbSvc.removeCourseHandler(id));
  component.courseSvc.removeRow(component.selectedRow);
  component.dataSource.data = component.dataSource.data.filter(row => row !== component.selectedRow);
 }
 async addHandler(component:GenericTableComponent,isStudent:boolean){
  component.formData= {...component.formData, add: addIcon, delete: deleteIcon };
  const obj = isStudent ? {...component.formData, role: 'student', studentId: uuidv4(),email:component.formData.userName,isStudent:true} : {...component.formData, StudentId: 'admin', CoursesId:uuidv4()};
  const response = isStudent ? await component.dbSvc.signUp(obj) : await component.dbSvc.addCourseHandler(obj);
  const isResponseOk=response && response.status && response.status <= 200
  Swal.fire(isResponseOk ? "Created successfully" : "Failed to create");
  component.dataSource.data.push(obj);
  component.formData = {};
 }
 async modalHandler(column: any, element: any,component:GenericTableComponent){
  component.selectedRow=element;

    switch (column) {
      case 'buy':
        await this.buyCourseHandler(element, component);break;
      case 'add':
        component.formData = (await openModalAndGetInput(await getAddForm(component.tableObj.FormsInputs,component.tableObj.componentName))).value;
        component.formData!=undefined&& this.AddPropertyHandler(component); break;
      case 'delete':
        component.formData = (await openModalAndGetInput(messages.Deleted)).value;
        component.isDeleteModalOpen = true;
        this.AddPropertyHandler(component); break;

    }
  }

   getDayOfTheWeek(form: {[key: string]: any}): string {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(form['date']));
  }




handleCourseSelection(component:reportAttendanceComponent){
  component.selectedCourse=component.table.filter((o:any)=>o.name==component.form.coursesName);
  component.form['hours']=component.selectedCourse[0].hours
  component.form.CoursesId=component.selectedCourse[0]!.coursesId
 }

 handleAttendeeReporting(component:reportAttendanceComponent){
 const isAllFieldFilled=Object.values(component.form).filter((field:any)=>field!=="").length==8;
 if(isAllFieldFilled){
   this.handleReportValidation(component)
 }
}

async handleReportValidation(component:reportAttendanceComponent) {
 const dbReportResponse= this.isReportValid(component) ? await component.dbSvc.addAttendeesHandler(component.form) :'';
 Swal.fire(dbReportResponse&&dbReportResponse.error==null?messages.AttendanceReportSucceed: messages.AttendanceReportingFailed)

}

isReportValid(component:reportAttendanceComponent){
let  isValidAbsence=false;
let  isValidAttendee=false;
 const currentDate = new Date();
 const startLesson = new Date(component.form['date'] + 'T' + component.form['hours'].split("-")[0]);
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
 const isValidReport = (component.form.Absentee === 'yes' && isValidAbsence) || (component.form.Absentee === 'no' && isValidAttendee);
 return isValidReport;
}

handleDaySelection(component:reportAttendanceComponent){
  component.form.courseDay= this.getDayOfTheWeek(component.form).toLowerCase()
  component.form.disabled=false;
  component.coursesToDisplay=component.table.filter((o:Courses)=>o.days==component.form.courseDay)
}

}
