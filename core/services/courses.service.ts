import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  addIcon, buyIcon, deleteIcon, messages } from 'src/app/data/objects';
import { GenericTableComponent } from 'src/app/shared/generic-table/generic-table.component';
import Swal from 'sweetalert2';

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


 getTablesDataSubjectValue(){
  return this.tablesData.getValue()
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
    ///add rows to the subject
    if (response && response?.status !== 400) {
      const data = this.tablesData.getValue();
      data.myCourses.push(response);
      this.updateTablesDataSubject(data);
    }

    Swal.fire(response?.status !== 400?messages.boughtSuccessfully:messages.FailedToPurchase);

  }


  async AddPropertyHandler(component: GenericTableComponent ) {
    const isStudent = component.tableObj?.componentName === 'StudentComponent';

    if (component.isDeleteModalOpen) {
      const id = isStudent ? component.selectedRow?.username : component.selectedRow?.coursesId;
      await (isStudent ? component.dbSvc.removeUserHandler(id) : component.dbSvc.removeCourseHandler(id));
      component.courseSvc.removeRow(component.selectedRow);
      component.dataSource.data = component.dataSource.data.filter(row => row !== component.selectedRow);
    }
    else {
      component.formData= {...component.formData, add: addIcon, delete: deleteIcon };
      const obj = isStudent ? {...component.formData, role: 'student', studentId: Math.random()*10+''} : {...component.formData, StudentId: 'admin', CoursesId: Math.random() * 10 + ''};
      const response = isStudent ? await component.dbSvc.signUp(obj) : await component.dbSvc.addCourseHandler(obj);
      const isResponseOk=response && response.status && response.status <= 200
      Swal.fire(isResponseOk ? "Created successfully" : "Failed to create");
      component.dataSource.data.push(obj);
      component.formData = {};
    }
    component.dataSource._updateChangeSubscription();
  }






}
