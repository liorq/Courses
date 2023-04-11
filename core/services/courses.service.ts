import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoursesData, UsersData } from 'src/app/data/objects';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private tablesData:BehaviorSubject<any>=new BehaviorSubject({CoursesData:CoursesData,UsersData:UsersData})
  _tablesData=this.tablesData.asObservable()

  private isNavBarVisible = new BehaviorSubject<boolean>(true);
   _isNavBarVisible = this.isNavBarVisible.asObservable();

   toggleNavBar(Status:boolean): void {
    this.isNavBarVisible.next(Status);
  }



  constructor() { }
  removeRow(obj:any){
  let data= this.tablesData.getValue();
  data.CoursesData=data.CoursesData.filter((o:any)=>o.name!==obj.name)
  data.UsersData=data.UsersData.filter((o:any)=>o.name!==obj.name)

  console.log(data);
  this.tablesData.next(data)
  }
}
