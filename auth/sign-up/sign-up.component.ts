import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from 'src/app/data/objects';
import { UserInfoService } from '../../core/services/auth.service'
import { CoursesService } from 'src/app/core/services/courses.service';
import { MyDataService } from 'src/app/core/services/db.service';
import { User } from 'src/app/data/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.css','./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userType: string='professor';


  constructor(private autoSvc:UserInfoService,private router:Router,public userInfoService: UserInfoService,private coursesSvc: CoursesService,private dbSvc:MyDataService) {}
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
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[\d-]+$/)]),
    age: new FormControl(0, [Validators.required, Validators.min(12), Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.userInfoService.passwordValidator, Validators.minLength(8)]),
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  ({address:this.address, birthDate:this.birthDate,name: this.name, phone: this.phone, age: this.age, email: this.email, password: this.password} = this.subscribeForm.controls);

}
async signUpHandler(){

  const user:User=this.getUserObj()
  const response=await this.dbSvc.signUp(user)
  const isResponseOk = response && response.status && response.status <= 200;

  if(isResponseOk){
    this.autoSvc.updateIsUserLoggedSubj(true)
    await this.dbSvc.signInHandler(this.email?.value,this.password?.value)
    this.router.navigate(['/my-courses']);
    const encryptAuthLevel=this.autoSvc.encryptHandler(this.userType)
    localStorage.setItem('authLevel',encryptAuthLevel);

  }
}
getUserObj():User{
 return {studentId:Math.random()*10+"",address:this.address?.value,birthDate:this.birthDate?.value,role:'employee',isStudent:this.userType=='professor'?false:true,name: this.name?.value, phone: this.phone?.value, age: this.age?.value, userName: this.email?.value, password: this.password?.value}

}
}
