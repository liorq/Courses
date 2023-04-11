import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { addIcon, addModal, deleteIcon, deleteModal } from 'src/app/data/objects';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})

export class GenericTableComponent implements AfterViewInit,OnInit{
   @Input()tableObj !:any;
  @ViewChild(MatSort) sort!: MatSort;

  deletedRow!:{};
  dataSource!:MatTableDataSource<any, any>;
  deleteModal = deleteModal
  modalMessage!:string ;
  isDeleteModalOpen:boolean = false;
  formData: any = {};
  constructor(public sanitizer: DomSanitizer,private courseSvc:CoursesService) {}

ngOnInit(): void {
  this.dataSource=new MatTableDataSource(this.tableObj.table);
}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  OpenModal(column: any, element: any) {
    const { message } = column === 'delete' ? deleteModal : addModal;
    Object.assign(this, { modalMessage: message, deletedRow: element, isDeleteModalOpen: column === 'delete' });
    document.getElementById("ex1")!.style.display = "flex";
  }

CloseModal(){
  document.getElementById("ex1")!.style.display = "none";
}

ChangePropertyHandler() {
  if (this.isDeleteModalOpen) {
    this.courseSvc.removeRow(this.deletedRow);
    this.dataSource.data = this.dataSource.data.filter(row => row !== this.deletedRow);
  } else {
    this.formData = { ...this.formData, delete: deleteIcon, add: addIcon };
    this.dataSource.data.push(this.formData);
    this.formData = {};
  }
  this.dataSource._updateChangeSubscription();
  this.CloseModal();
}

}
