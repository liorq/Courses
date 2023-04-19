import { Component, Input } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DbService } from 'src/app/core/services/db.service';
import { deleteModal } from 'src/app/data/objects';
import {MatSort, Sort }from '@angular/material/sort'

import { LiveAnnouncer } from '@angular/cdk/a11y';
const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ["../../auth/sign-in/sign-in.component.css",'./generic-table.component.css'],
})
export class GenericTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];




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

  constructor(private _liveAnnouncer: LiveAnnouncer,public dbSvc:DbService, public sanitizer: DomSanitizer,public courseSvc:CoursesService) {}
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {

      console.log(this.dataSource._filterData)
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngAfterViewInit() {

    const { componentName } = this.tableObj;
    this.isAddBtnNeeded = componentName === "StudentComponent" || componentName === "CoursesComponent";
    setTimeout(() => {
       this.isLoadingSignVisible = false;
      const { table } = this.tableObj;
      this.courseSvc.addIconsBtn(table);
      this.dataSource = new MatTableDataSource(table);
      this.dataSource.sort = this.sort;
    }, 500);
  }

  async OpenModal(column: any, element: any) {
    await this.courseSvc.modalHandler(column, element,this);
  }
  onSortChange(event:any) {
    this.dataSource.sort = event;
  }
}
