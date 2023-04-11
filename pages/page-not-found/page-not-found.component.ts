import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit{
  constructor(private coursesSvc: CoursesService) {}
 ngOnInit(): void {
  this.coursesSvc.toggleNavBar(false)
}


}
