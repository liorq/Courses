import { Component } from "@angular/core";
import { CoursesService } from "src/app/core/services/courses.service";
import { MyDataService } from "src/app/core/services/db.service";
import { classAttendeesTableObj } from "src/app/data/table.objects";

@Component({
  selector: "app-class-attendees-list",
  templateUrl: "./class-attendees-list.component.html",
  styleUrls: ["./class-attendees-list.component.css"],
})
export class ClassAttendeesListComponent {

  tableObj=classAttendeesTableObj

  constructor(
    private dbSvc: MyDataService,
    private courseSvc: CoursesService
  ) {}

  async ngOnInit() {
    this.courseSvc.toggleNavBar(true);
    this.courseSvc._tablesData.subscribe((updatedData) => {
      this.tableObj.table = updatedData.attendees;
    });
    if (this.tableObj.table?.length == 0) await this.getAllUsersAttendees();
  }

  async getAllUsersAttendees() {
    await this.courseSvc.setArrayHandler(
      this.dbSvc.getAllUsersAttendees(),
      this.tableObj.table
    );
  }
}
