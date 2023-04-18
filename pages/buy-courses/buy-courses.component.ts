import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { CoursesService } from "src/app/core/services/courses.service";
import { DbService } from "src/app/core/services/db.service";
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
    private dbSvc: DbService,
    private authSvc:AuthService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.CoursesData;
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
