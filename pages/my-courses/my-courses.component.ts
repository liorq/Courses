import { Component } from "@angular/core";
import { CoursesService } from "../../core/services/courses.service";
import { MyDataService } from "src/app/core/services/db.service";
import { myCoursesTableObj } from "src/app/data/table.objects";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"],
})
export class MyCoursesComponent {

  tableObj = myCoursesTableObj
  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.myCourses;
    });
    if (this.tableObj.table?.length == 0) await this.getMyCourses();
  }

  async getMyCourses() {
    await this.courseSvc.setArrayHandler(
      this.dbSvc.getAllUserCourses(),
      this.tableObj.table
    );
  }
}
