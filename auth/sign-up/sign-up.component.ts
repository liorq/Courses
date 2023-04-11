import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from 'src/app/data/objects';
import { UserInfoService } from '../../../app/core/services/user-info.service'
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.css','./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userInfoService: UserInfoService,private coursesSvc: CoursesService) {}
  isNavBarVisible:boolean=true;
  subscribeForm!: FormGroup;
  errorMessages=errorMessages;
  firstName!: AbstractControl<any, any> | null;
  lastName!: AbstractControl<any, any> | null;
  age!: AbstractControl<any, any> | null;
  email!: AbstractControl<any, any> | null;
  password!: AbstractControl<any, any> | null;
ngOnInit(){
  this.initForm()
  this.coursesSvc.toggleNavBar(false)
}


initForm() {
  this.subscribeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.userInfoService.passwordValidator, Validators.minLength(8)])
  });
  ({firstName: this.firstName, lastName: this.lastName, age: this.age, email: this.email, password: this.password} = this.subscribeForm.controls);

}
signUpHandler(){

}
}
