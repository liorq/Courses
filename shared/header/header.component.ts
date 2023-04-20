import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { CoursesService } from "src/app/core/services/courses.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})

export class HeaderComponent implements OnInit {
  isUserLogged!: boolean;
  constructor(private authSvc: AuthService,private coursesSvc:CoursesService) {}
  
  ngOnInit(): void {
    this.authSvc._isUserLogged.subscribe((newStatus) => {
      this.isUserLogged = newStatus;
    });
    if (this.authSvc.isUserLoggedIn())
    this.isUserLogged = true;
  }

  deleteUserInfo() {
    localStorage.setItem("token", "");
    localStorage.setItem("authLevel", "");
    this.isUserLogged = false;
    this.coursesSvc.updateTablesDataSubject({CoursesData:[],UsersData:[],attendees:[],myCourses:[]})
  }
}
