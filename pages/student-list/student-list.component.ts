import { Component } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ModalStudentColumns, StudentColumns, StudentDisplayedColumns } from 'src/app/data/array';
import { UsersData } from 'src/app/data/objects';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

constructor(private courseSvc:CoursesService){}
table!:any[];
StudentDisplayedColumns = StudentDisplayedColumns
StudentColumns = StudentColumns
ModalColumns=ModalStudentColumns;
  ngOnInit(): void {
    this.courseSvc._tablesData.subscribe((updatedData) =>{
    this.table=updatedData.UsersData;
    })
  }


}
