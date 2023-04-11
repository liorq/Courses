import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { menuApps, menuCourses } from 'src/app/data/array';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../header/header.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private coursesSvc: CoursesService){}
  isNavBarVisible:boolean=true;
ngOnInit(): void {
  this.coursesSvc._isNavBarVisible.subscribe((status)=>{
  this.isNavBarVisible = status;
  })
}
  menuApps = menuApps
  menuCourses = menuCourses

}
