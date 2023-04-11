import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  Password: string = '';
  userName: string = '';
  constructor(private coursesSvc: CoursesService,private formBuilder: FormBuilder) {

}
signInForm!: FormGroup;

ngOnInit(): void {
  this.coursesSvc.toggleNavBar(false)

  this.signInForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
}

onSubmit() {
  console.log(this.signInForm.value);
}
signInHandler(){
  
}
}
