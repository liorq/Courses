import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
 isUserLogged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  _isUserLogged=this.isUserLogged.asObservable();

  constructor() { }
  getInvalidMessage(errors:any,property:string,error:keyof typeof errors,errorMessage:string){
    if (errors?.required) {
      return `You must enter your ${property}`;
    }
    if (errors?.[error]) {
      return errorMessage;
    }
    return
  }


  updateIsUserLoggedSubj(newStatus:boolean){
  this.isUserLogged.next(newStatus)
  }
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = !passwordRegex.test(control.value);
    return isValidPassword ? { passwordInvalid: true } : null;
  }

  
  getEncryptedPassword(password:string){
    return CryptoJS.SHA256(password).toString();
  }
  isUserLoggedIn(){
    const token = localStorage.getItem('token');
    return (token!=null&&token!=""&&token!=undefined);
  }
}
