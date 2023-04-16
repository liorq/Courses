import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  password!: AbstractControl<any, any> ;
  userName!: AbstractControl<any, any> ;
  constructor(private router:Router,private dbSvc:MyDataService,private coursesSvc: CoursesService,private formBuilder: FormBuilder) {

}
signInForm!: FormGroup;

ngOnInit(): void {
  this.coursesSvc.toggleNavBar(false)

  this.signInForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  ({ userName: this.userName, password: this.password} = this.signInForm.controls);

}

onSubmit() {
  console.log(this.signInForm.value);
}
async signInHandler(){
const form= await this.dbSvc.signInHandler(this.userName?.value, this.password?.value)
 if(form?.access_token){
 console.log("in")
this.router.navigate(['/my-courses']);
 }
 else
 console.log("user not found")

}
}
