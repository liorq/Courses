import { AbstractControl } from "@angular/forms";


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
  email?:string;
}
export type AnyObject = {
  [key: string]: any;
};


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
  coursesId:string;
  buy?:string;
}


