import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { CoursesColumns, CoursesDisplayedColumns, CoursesFormsInputs, ModalCoursesColumns } from 'src/app/data/arrays';
import { CoursesData } from 'src/app/data/objects';

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

  async getAllCourses(){
    const AllCourses=await this.dbSvc.getAllCourseHandler()
    if(Array.isArray(AllCourses)){
      this.courseSvc.addIconsBtn(AllCourses)
      const subValue=this.courseSvc.getTablesDataSubjectValue().CoursesData=AllCourses
      this.courseSvc.updateTablesDataSubject(subValue)
      this.table=AllCourses;
    }

  }
  async ngOnInit() {
    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.CoursesData

    })

    await this.getAllCourses();
  }



}
