import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { CoursesService } from "src/app/core/services/courses.service";
import { DbService } from "src/app/core/services/db.service";
import { classAttendeesTableObj } from "src/app/data/table.objects";

@Component({
  selector: "app-class-attendees-list",
  templateUrl: "./class-attendees-list.component.html",
  styleUrls: ["./class-attendees-list.component.css"],
})
export class ClassAttendeesListComponent {

  tableObj=classAttendeesTableObj
  constructor(
    private dbSvc: DbService,
    private courseSvc: CoursesService,
    private authSvc:AuthService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.attendees;
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
