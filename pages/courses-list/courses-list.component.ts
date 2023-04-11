import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesColumns, CoursesDisplayedColumns } from 'src/app/data/array';
import { CoursesData } from 'src/app/data/objects';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  constructor(private courseSvc: CoursesService){}
  table!:any[];
  CoursesDisplayedColumns=CoursesDisplayedColumns
  CoursesColumns =CoursesColumns
  ngOnInit(): void {
    this.courseSvc._tablesData.subscribe((updateDData) =>{
    this.table=updateDData.CoursesData;
    })
  }



}
