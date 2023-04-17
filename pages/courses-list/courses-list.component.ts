import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { CoursesColumns, CoursesDisplayedColumns, CoursesFormsInputs, ModalCoursesColumns } from 'src/app/data/arrays';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  constructor(private courseSvc: CoursesService,private dbSvc: MyDataService){}
  table!:any[];
  CoursesDisplayedColumns=CoursesDisplayedColumns
  CoursesColumns =CoursesColumns
  ModalColumns=ModalCoursesColumns;
  FormsInputs=CoursesFormsInputs;
  async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.CoursesData

    })
    if(this.table?.length==0)
    await this.getAllCourses();
  }

  async getAllCourses(){
    await  this.courseSvc.setArrayHandler(this.dbSvc.getAllCourseHandler(),this.table)
  }



}
