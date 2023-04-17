import { Component, Input } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { getAddUserForm, getDeletedForm, openModalAndGetInput } from 'src/app/data/forms';
import { addIcon, deleteIcon, deleteModal } from 'src/app/data/objects';
import Swal from 'sweetalert2';

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
  constructor(private dbSvc:MyDataService, public sanitizer: DomSanitizer,private courseSvc:CoursesService) {}


  ngAfterViewInit() {
    setTimeout(() => {
      this.courseSvc.addIconsBtn(this.tableObj.table)
      console.log(this.tableObj)
      this.dataSource=new MatTableDataSource(this.tableObj.table);
      this.dataSource.sort = this.sort;
      this.isLoadingSignVisible=false;
    },1500)
  }

  async OpenModal(column: any, element: any) {
    this.selectedRow=element;

    if(column=='buy')
    await this.buyCourse(element)
   else if(column=='add'||column=='delete'){
      const modal= column === 'add'?await getAddUserForm(this.tableObj.FormsInputs):await getDeletedForm()
      this.formData = (await openModalAndGetInput(modal)).value;
      this.isDeleteModalOpen = column === 'delete';
      this.ChangePropertyHandler()
    }

  }

async buyCourse(element:any){
  const newCourse={...element,StudentId:'admin'}
  const response:any=await this.dbSvc.buyCourseHandler(newCourse)
  const isResponseOk=response && response.status && response.status <= 200
  Swal.fire(isResponseOk?"bought successfully":"Failed to purchase");
}

async ChangePropertyHandler() {
  const isStudent = this.tableObj?.componentName === 'StudentComponent';
  const isCourse = this.tableObj?.componentName === 'CoursesComponent';

  if (this.isDeleteModalOpen) {
    const id = isStudent ? this.selectedRow?.username : this.selectedRow?.coursesId;
    console.log(await (isStudent ? this.dbSvc.removeUserHandler(id) : this.dbSvc.removeCourseHandler(id)));
    this.courseSvc.removeRow(this.selectedRow);
    this.dataSource.data = this.dataSource.data.filter(row => row !== this.selectedRow);
  } else {
    this.formData = { add: addIcon, delete: deleteIcon };
    const obj = isStudent ? {...this.formData, role: 'student'} : {...this.formData, StudentId: 'admin', CoursesId: Math.random() * 10 + ''};
    const response = isStudent ? await this.dbSvc.signUp(obj) : await this.dbSvc.addCourseHandler(obj);
    const isResponseOk=response && response.status && response.status <= 200
    Swal.fire(isResponseOk ? "Created successfully" : "Failed to create");
    this.dataSource.data.push(obj);
    this.formData = {};
  }
  this.dataSource._updateChangeSubscription();
}

}
