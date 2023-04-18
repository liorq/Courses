import { Component } from "@angular/core";
import { CoursesService } from "../../core/services/courses.service";
import { MyDataService } from "src/app/core/services/db.service";
import { myCoursesTableObj } from "src/app/data/table.objects";
import { UserInfoService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"],
})
export class MyCoursesComponent {

  tableObj = myCoursesTableObj;

  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService,private authSvc:UserInfoService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.myCourses;
    });
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
