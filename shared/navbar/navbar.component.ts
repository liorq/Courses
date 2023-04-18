import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { menuApps, menuCatalog, menuCourses } from 'src/app/data/arrays';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../header/header.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private coursesSvc: CoursesService){}
  isNavBarVisible:boolean=true;
  menuCatalog=menuCatalog;
  
ngOnInit(): void {
  this.coursesSvc._isNavBarVisible.subscribe((status)=>{
  this.isNavBarVisible = status;
  })
}


}
