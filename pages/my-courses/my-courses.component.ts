import { Component } from "@angular/core";
import { CoursesService } from "../../core/services/courses.service";
import {  ModalCoursesColumns, myCoursesDisplayedColumns, myCoursesColumns} from "../../data/arrays";
import { MyDataService } from "src/app/core/services/db.service";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"],
})
export class MyCoursesComponent {
  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService
  ) {}

  table!: any[];
  CoursesDisplayedColumns = myCoursesDisplayedColumns;
  CoursesColumns = myCoursesColumns;
  ModalColumns = ModalCoursesColumns;

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.table = updatedData.myCourses;
    });
    if (this.table?.length == 0) await this.getMyCourses();
  }

  async getMyCourses() {
    await this.courseSvc.setArrayHandler(
      this.dbSvc.getAllUserCourses(),
      this.table
    );
  }
}
