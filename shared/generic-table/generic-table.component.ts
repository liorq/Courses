import { Component, Input } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DbService } from 'src/app/core/services/db.service';
import { deleteModal } from 'src/app/data/objects';
import {MatSort, Sort }from '@angular/material/sort'

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ["../../auth/sign-in/sign-in.component.css",'./generic-table.component.css'],
})
export class GenericTableComponent implements AfterViewInit{




 @Input()tableObj !:any;
 @ViewChild(MatSort) sort!: MatSort;
 selectedRow!:any;
  dataSource!:MatTableDataSource<any, any>;
  deleteModal = deleteModal
  modalMessage!:string ;
  isDeleteModalOpen:boolean = false;
  formData: any = {};
  isLoadingSignVisible:boolean=true;
  isAddBtnNeeded!:boolean;

  constructor(public dbSvc:DbService, public sanitizer: DomSanitizer,public courseSvc:CoursesService) {}

  ngAfterViewInit() {

    const { componentName } = this.tableObj;
    this.isAddBtnNeeded = componentName === "StudentComponent" || componentName === "CoursesComponent";
    setTimeout(() => {
       this.isLoadingSignVisible = false;
      const { table } = this.tableObj;
      this.courseSvc.addIconsBtn(table);
      this.dataSource = new MatTableDataSource(table);
      this.dataSource.sort = this.sort;
    }, 1500);
  }

  async OpenModal(column: any, element: any) {
    await this.courseSvc.modalHandler(column, element,this);
  }

}
