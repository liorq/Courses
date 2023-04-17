import { AbstractControl } from "@angular/forms";

export interface ClassAttendees{
     name:string;
     DateOfArrival:string;
     CoursesId:string;
     studentId :string;
}

export interface User {
  name: string| AbstractControl<any, any>;
  birthDate: string| AbstractControl<any, any>;
  address: string| AbstractControl<any, any>;
  userName: string| AbstractControl<any, any>;
  isStudent: boolean| AbstractControl<any, any>;
  studentId: string| AbstractControl<any, any>;
  password: string| AbstractControl<any, any>;
  phone: string| AbstractControl<any, any>;
  delete?:string| AbstractControl<any, any>;
  add?:string| AbstractControl<any, any>;
  role?:string;
  age?:string;
}



export interface Courses {
  name: string;
  startDate: string;
  endDate: string;
  days: string;
  hours: string;
  CoursesId: string;
  StudentId: string;
  add?:string;
  delete?:string;

}
export interface ClassAttendees{
  name: string;
  DateOfArrival: string;
  CoursesId: string;
  studentId: string;

}
