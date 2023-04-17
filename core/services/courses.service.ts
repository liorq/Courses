import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  addIcon, buyIcon, deleteIcon, reportIcon } from 'src/app/data/objects';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private tablesData:BehaviorSubject<any>=new BehaviorSubject({CoursesData:[],UsersData:[],attendees:[],myCourses:[]})
  _tablesData=this.tablesData.asObservable()

  private isNavBarVisible = new BehaviorSubject<boolean>(true);
   _isNavBarVisible = this.isNavBarVisible.asObservable();

   toggleNavBar(Status:boolean): void {
    this.isNavBarVisible.next(Status);
  }
  updateTablesDataSubject(newValue:any){
    this.tablesData.next(newValue)
  }
 getTablesDataSubjectValue(){
  return this.tablesData.getValue()
 }
  addIconsBtn(array:any[]){
 for(let item of array)  {
  item.add=addIcon
  item.delete=deleteIcon
  item.report=reportIcon
  item.buy=buyIcon
  }
  }
  removeRow(obj:any){
  let data= this.tablesData.getValue();
  data.CoursesData=data.CoursesData.filter((o:any)=>o.name!==obj.name)
  data.UsersData=data.UsersData.filter((o:any)=>o.name!==obj.name)
  this.tablesData.next(data)
  }
  addRow(field:string,element:any){
    let data= this.tablesData.getValue();
    data[field].push(element)
    this.tablesData.next(data)
  }
  changeRow(field:string,element:any,propertyToUpdate:string,newValue:string){
    const obj=element[propertyToUpdate]=newValue
    this.removeRow(element)
    this.addRow(field,obj)

  }

  async setArrayHandler(promise: Promise<any>, array: any[]){
    const result=await await promise
    if(Array.isArray(result)){
      array.length=0
      array.push(...result);
    }
  }
}
