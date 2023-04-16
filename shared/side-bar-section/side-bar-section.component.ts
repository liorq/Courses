import { Component, Input } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MyDataService } from "src/app/core/services/db.service";
import { ModalStudentColumns } from "src/app/data/arrays";
import { getEditUserForm, openModalAndGetInput } from "src/app/data/forms";
import { addModal, deleteModal } from "src/app/data/objects";

@Component({
  selector: "app-side-bar-section",
  templateUrl: "./side-bar-section.component.html",
  styleUrls: [
    "./side-bar-section.component.css",
    "../header/header.component.scss",

  ],
})
export class SideBarSectionComponent {
  constructor(private dbSvc:MyDataService){}
  deleteModal=deleteModal
  ModalColumns=ModalStudentColumns
  formData:any
  addModal=addModal
  modalMessage=''
 @Input() menuItems!: any[];
 @Input() title!: string;
 OpenModal( element: any) {
  console.log(element,"hi")
  if(element.label=='delete'){

    const { message } = element.label === 'delete' ? deleteModal : addModal;
    Object.assign(this, { modalMessage: message, deletedRow: element, isDeleteModalOpen: element.label === 'delete' });
    const modal = document.getElementById("ex1");
    modal && (modal.style.display = "flex");
  }
}

CloseModal(){

}
 async ChangePropertiesHandler(menuItem:any){

  if (['Change Name', 'Change Email', 'Change Password'].includes(menuItem.label)) {
  let subToChange = menuItem.label.split(' ')[1];
 let form:any=await getEditUserForm(subToChange)
  form= await openModalAndGetInput(form)
 console.log(form)
 if(form.isConfirmed)
 {
   let newString = menuItem.label.split(' ')[0].toLowerCase()+subToChange
   console.log(newString)

const res= await this.dbSvc.ChangeUserPropertyHandler(newString, form.value[1],form.value[0])
console.log(res)
  return
 }
  }
   ///modal 2 inputs then display
  // this.OpenModal(menuItem.label,menuItem)




}
}
