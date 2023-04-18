import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import {  ModalStudentColumns,  StudentColumns,  StudentDisplayedColumns, StudentFormsInputs} from "src/app/data/arrays";
import { MyDataService } from "src/app/core/services/db.service";
import { studentListTableObj } from "src/app/data/table.objects";
import { UserInfoService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent {
  constructor(private courseSvc: CoursesService,private dbSvc: MyDataService,private authSvc:UserInfoService) {}

    tableObj = studentListTableObj

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.UsersData;
    });
      await this.loadTableData();

  }

  async loadTableData(){
    if (this.authSvc.isUserLoggedIn()&& this.tableObj.table?.length == 0) {
      const [CoursesData, UsersData, attendees, myCourses] = await this.dbSvc.getAllTablesData()
      this.courseSvc.initTablesDataSubject(CoursesData,UsersData,attendees, myCourses);
    }
  }
}
