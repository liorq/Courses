import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isUserLogged!:boolean;
constructor(private authSvc: UserInfoService ){}
ngOnInit(): void {
  this.authSvc._isUserLogged.subscribe((newStatus)=>{
    this.isUserLogged = newStatus;
  })
  const isUserLogged= this.authSvc.isUserLoggedIn();
  if(isUserLogged)
  this.isUserLogged=isUserLogged
}
deleteUserInfo(){
  localStorage.setItem('token',"");
  this.isUserLogged=false;
}
}
