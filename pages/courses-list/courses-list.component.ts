import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { coursesListTableObj } from 'src/app/data/table.objects';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  tableObj=coursesListTableObj
  constructor(private courseSvc: CoursesService,private dbSvc: MyDataService){}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.tableObj.table=updatedData.CoursesData
    })
    
    if(this.tableObj.table?.length==0)
    await this.getAllCourses();
  }

  async getAllCourses(){
    await  this.courseSvc.setArrayHandler(this.dbSvc.getAllCourseHandler(),this.tableObj.table)
  }
}
