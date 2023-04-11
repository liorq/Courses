import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { deleteModal } from 'src/app/data/objects';


@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],

})
export class GenericTableComponent implements AfterViewInit,OnInit{
  @Input() table!:any[];
  @ViewChild(MatSort) sort!: MatSort;
  deletedRow!:{};
  dataSource!:MatTableDataSource<any, any>;
  @Input() displayedColumns!: string[];
  @Input() columns !:any[]
  deleteModal = deleteModal

  constructor(public sanitizer: DomSanitizer,private courseSvc:CoursesService) {}

ngOnInit(): void {
  this.dataSource=new MatTableDataSource(this.table);
}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

OpenModal(column:any,element:any){
if(column=='delete'){
 document.getElementById("ex1")!.style.display = "block";
  this.deletedRow=element;
}

}
CloseModal(){
  document.getElementById("ex1")!.style.display = "none";

}

deletePropertyHandler(){
 this.courseSvc.removeRow(this.deletedRow)
 const index = this.dataSource.data.indexOf(this.deletedRow);
 if (index >= 0) {
  this.dataSource.data.splice(index, 1);
  this.dataSource._updateChangeSubscription();
 }

}
}
