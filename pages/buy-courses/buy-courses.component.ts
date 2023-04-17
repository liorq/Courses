import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import { MyDataService } from "src/app/core/services/db.service";
import { buyCoursesTableObj } from "src/app/data/table.objects";

@Component({
  selector: "app-buy-courses",
  templateUrl: "./buy-courses.component.html",
  styleUrls: ["./buy-courses.component.css"],
})

export class BuyCoursesComponent {
  tableObj=buyCoursesTableObj

  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.myCourses;
    });
    if ( this.tableObj.table?.length == 0) await this.getAllCourses();
  }
  async getAllCourses() {
    await this.courseSvc.setArrayHandler(
      this.dbSvc.getAllCourseHandler(),
      this.tableObj.table
    );
  }
}
