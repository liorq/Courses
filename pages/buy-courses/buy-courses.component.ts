import { Component } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { ModalCoursesColumns, myCoursesDisplayedColumns, myCoursesColumns, BuyCoursesColumns, BuyCoursesDisplayedColumns, ModalBuyCoursesColumns } from 'src/app/data/arrays';

@Component({
  selector: 'app-buy-courses',
  templateUrl: './buy-courses.component.html',
  styleUrls: ['./buy-courses.component.css']
})
export class BuyCoursesComponent {
  table!:any[];
  CoursesDisplayedColumns=BuyCoursesDisplayedColumns
  CoursesColumns =BuyCoursesColumns
  ModalColumns=ModalBuyCoursesColumns;


 async ngOnInit() {

    this.courseSvc.toggleNavBar(true)
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.myCourses;
    })

   }
  constructor(private courseSvc: CoursesService,private dbSvc: MyDataService){}

  async getAllCourses(){
    const response=await this.dbSvc.getAllCourseHandler()
    if(Array.isArray(response)){
        console.log(response)
       const subValue=this.courseSvc.getTablesDataSubjectValue().CoursesData=response
        this.courseSvc.updateTablesDataSubject(subValue)

         this.table=response;
    }

  }
}
