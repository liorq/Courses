import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DbService } from 'src/app/core/services/db.service';
import { Courses } from 'src/app/data/interfaces';
import { coursesListTableObj } from 'src/app/data/table.objects';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  tableObj=coursesListTableObj
  constructor(private courseSvc: CoursesService,private dbSvc: DbService,private authSvc:AuthService){}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
      this.tableObj.table = updatedData.CoursesData?.filter((u:Courses)=>u.name!="");
    })
    await this.loadTableData();
  }

  async loadTableData(){
    const isLoadDataNeeded = this.authSvc.isUserLoggedIn() && this.tableObj.table?.length == 0;
    if (isLoadDataNeeded) {
      const [CoursesData, UsersData, attendees, myCourses] = await this.dbSvc.getAllTablesData()
      this.courseSvc.initTablesDataSubject(CoursesData,UsersData,attendees, myCourses);
    }
  }
}
