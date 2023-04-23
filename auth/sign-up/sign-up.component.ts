import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from 'src/app/data/objects';
import { AuthService } from '../../core/services/auth.service'
import { CoursesService } from 'src/app/core/services/courses.service';
import { DbService } from 'src/app/core/services/db.service';
import { User } from 'src/app/data/interfaces';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.css','./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authSvc:AuthService,private router:Router,public AuthService: AuthService,private coursesSvc: CoursesService,private dbSvc:DbService) {}
  userType: string='professor';
  isNavBarVisible:boolean=true;
  subscribeForm!: FormGroup;
  errorMessages=errorMessages;
   birthDate!: AbstractControl<any, any> | null;
   address!: AbstractControl<any, any> | null;
   name!: AbstractControl<any, any> | null;
  phone!: AbstractControl<any, any> | null;
  age!: AbstractControl<any, any> | null;
  email!: AbstractControl<any, any> | null;
  password!: AbstractControl<any, any> | null;
ngOnInit(){
  this.initForm()
  this.coursesSvc.toggleNavBar(false)
}

initForm() {
  this.subscribeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.AuthService.passwordValidator, Validators.minLength(8)]),
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  ({address:this.address, birthDate:this.birthDate,name: this.name, phone: this.phone, age: this.age, email: this.email, password: this.password} = this.subscribeForm.controls);

}
async signUpHandler(){
  const response=await this.dbSvc.signUp(this.getUserObj())
  const isResponseOk = response && response.status && response.status <= 200;
  if(isResponseOk){
    this.authSvc.updateIsUserLoggedSubj(true)
    await this.dbSvc.signInHandler(this.email?.value,this.password?.value)
    this.router.navigate(['/my-courses']);
    this.authSvc.encryptAuthLevelHandler(this.userType)
  }
}

getUserObj():User{
 return {email:this.email?.value,studentId:uuidv4(),address:this.address?.value,birthDate:this.birthDate?.value,role:'employee',isStudent:this.userType=='professor'?false:true,name: this.name?.value, phone: this.phone?.value, age: this.age?.value, userName: this.email?.value, password: this.password?.value}
}

}
