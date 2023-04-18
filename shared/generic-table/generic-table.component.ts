import { Component, Input } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { deleteModal } from 'src/app/data/objects';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
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
  constructor(public dbSvc:MyDataService, public sanitizer: DomSanitizer,public courseSvc:CoursesService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const { table, sort } = this.tableObj;
      this.courseSvc.addIconsBtn(table);
      this.dataSource = new MatTableDataSource(table);
      this.dataSource.sort = sort;
      this.isLoadingSignVisible = false;
    }, 1500);
  }

  async OpenModal(column: any, element: any) {
    await this.courseSvc.modalHandler(column, element,this);
  }

}
