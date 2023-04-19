import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import { DbService } from "src/app/core/services/db.service";
import { studentListTableObj } from "src/app/data/table.objects";
import { AuthService } from "src/app/core/services/auth.service";
import { User } from "src/app/data/interfaces";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent {
  constructor(private courseSvc: CoursesService,private dbSvc: DbService,private authSvc:AuthService) {}

    tableObj = studentListTableObj

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.UsersData?.filter((u:User)=>u.isStudent!==false&&u.name!="");
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
