import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { getAddUserForm, getDeletedForm, openModalAndGetInput } from 'src/app/data/forms';
import { Courses, User } from 'src/app/data/interfaces';
import { addIcon, deleteIcon, deleteModal } from 'src/app/data/objects';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})

export class GenericTableComponent implements AfterViewInit,OnInit{
 @Input()tableObj !:any;
  @ViewChild(MatSort) sort!: MatSort;

  deletedRow!:any;
  dataSource!:MatTableDataSource<any, any>;
  deleteModal = deleteModal
  modalMessage!:string ;
  isDeleteModalOpen:boolean = false;
  formData: any = {};
  isLoadingSignVisible:boolean=true;


  constructor(private dbSvc:MyDataService, public sanitizer: DomSanitizer,private courseSvc:CoursesService) {}

ngOnInit(): void {
  // this.courseSvc.addIconsBtn(this.tableObj.table)
}
  ngAfterViewInit() {

    setTimeout(() => {
      console.log(this.tableObj)
      this.dataSource=new MatTableDataSource(this.tableObj.table);
      this.dataSource.sort = this.sort;
      this.isLoadingSignVisible=false;
    },1500)
  }

  async OpenModal(column: any, element: any) {
    if(column=='buy')
    await this.buyCourse(element)
   else if(column=='add'||column=='delete'){
      const modal= column === 'add'?await getAddUserForm(this.tableObj.FormsInputs):await getDeletedForm()
      const array=await openModalAndGetInput(modal)

      this.formData=array.value;
      this.deletedRow=element;
      this.isDeleteModalOpen=column ==='delete'
      this.ChangePropertyHandler()
    }

  }

async buyCourse(element:any){
  this.deletedRow=element;
  const newCourse={...element,StudentId:'admin'}
  const response:any=await this.dbSvc.buyCourseHandler(newCourse)
  const isResponseOk=response && response.status && response.status <= 200
  Swal.fire(isResponseOk?"bought successfully":"Failed to purchase");
}



async ChangePropertyHandler() {
  if (this.isDeleteModalOpen) {
    if(this.tableObj?.componentName=='StudentComponent')
    console.log(await this.dbSvc.removeUserHandler(this.deletedRow?.username))
    if(this.tableObj?.componentName=='CoursesComponent'){

      console.log(await this.dbSvc.removeCourseHandler(this.deletedRow?.CoursesId))

    }

    this.courseSvc.removeRow(this.deletedRow);
    this.dataSource.data = this.dataSource.data.filter(row => row !== this.deletedRow);
  } else {
    this.formData = { ...this.formData,add:addIcon,delete:deleteIcon};
    const user:User={...this.formData,role:'student',add:addIcon,delete:deleteIcon}
    const course:Courses={...this.formData,StudentId:'admin',CoursesId:Math.random()*10+""}
    let response;
    console.log(this.tableObj?.componentName)
     if(this.tableObj?.componentName=='StudentComponent')
     response= await this.dbSvc.signUp(user)
     if(this.tableObj?.componentName=='CoursesComponent'){
       response= await this.dbSvc.addCourseHandler(course)

     }



      const isResponseOk=response && response.status && response.status <= 200
      Swal.fire(isResponseOk?"Created successfully":"Failed to create");



    const objToPus=this.tableObj.componentName=='CoursesComponent'?course:user
    this.dataSource.data.push(objToPus);
    this.formData = {};
  }
  this.dataSource._updateChangeSubscription();
}

}
