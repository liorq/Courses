import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import {  ModalStudentColumns,  StudentColumns,  StudentDisplayedColumns, StudentFormsInputs} from "src/app/data/arrays";
import { MyDataService } from "src/app/core/services/db.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent {
  constructor(
    private courseSvc: CoursesService,
    private dbSvc: MyDataService
  ) {}
  table: any[] = [];
  StudentDisplayedColumns = StudentDisplayedColumns;
  StudentColumns = StudentColumns;
  ModalColumns = ModalStudentColumns;
  FormsInputs = StudentFormsInputs;

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.table = updatedData.UsersData;
    });
    if (this.table?.length == 0) {
      await this.getAllStudents();
    }
  }

  async getAllStudents() {
    await this.courseSvc.setArrayHandler(this.dbSvc.getAllUsers(), this.table);
  }
}
