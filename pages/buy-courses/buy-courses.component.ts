import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import { MyDataService } from "src/app/core/services/db.service";
import {  BuyCoursesColumns,  BuyCoursesDisplayedColumns, ModalBuyCoursesColumns} from "src/app/data/arrays";

@Component({
  selector: "app-buy-courses",
  templateUrl: "./buy-courses.component.html",
  styleUrls: ["./buy-courses.component.css"],
})

export class BuyCoursesComponent {
  table!: any[];
  CoursesDisplayedColumns = BuyCoursesDisplayedColumns;
  CoursesColumns = BuyCoursesColumns;
  ModalColumns = ModalBuyCoursesColumns;

  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.table = updatedData.myCourses;
    });
    if (this.table?.length == 0) await this.getAllCourses();
  }

  async getAllCourses() {
    await this.courseSvc.setArrayHandler(
      this.dbSvc.getAllCourseHandler(),
      this.table
    );
  }
}
