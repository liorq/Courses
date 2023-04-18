import { BuyCoursesColumns, BuyCoursesDisplayedColumns, ClassAttendees, ClassAttendeesColumns, ClassAttendeesDisplayedColumns, CoursesColumns, CoursesDisplayedColumns, CoursesFormsInputs, ModalBuyCoursesColumns, ModalCoursesColumns, ModalStudentColumns, StudentColumns, StudentDisplayedColumns, StudentFormsInputs, myCoursesColumns, myCoursesDisplayedColumns } from "./arrays";

export const coursesListTableObj={
  columns:CoursesColumns,ModalColumns:ModalCoursesColumns,
  displayedColumns:CoursesDisplayedColumns,
  table:[],FormsInputs:CoursesFormsInputs,componentName:'CoursesComponent'
}

export const studentListTableObj={
  columns:StudentColumns,ModalColumns:ModalStudentColumns,
  displayedColumns:StudentDisplayedColumns,
  table:[],FormsInputs:StudentFormsInputs,componentName:'StudentComponent'
}

export const  myCoursesTableObj= {
  columns:myCoursesColumns,ModalColumns:ModalCoursesColumns,
  displayedColumns:myCoursesDisplayedColumns,
  table:[]
}

export const buyCoursesTableObj={
  columns:BuyCoursesColumns,ModalColumns:ModalBuyCoursesColumns,
  displayedColumns:BuyCoursesDisplayedColumns,
  table:[],componentName:'buyCoursesComponent'
}
export const  classAttendeesTableObj={
  columns:ClassAttendees,ModalColumns:ClassAttendeesColumns,
  displayedColumns:ClassAttendeesDisplayedColumns,
  table:[],componentName:'ClassAttendeesComponent'}
