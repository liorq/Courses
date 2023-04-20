import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import {  menuCatalog, menuCatalogForPro } from 'src/app/data/arrays';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../header/header.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewChecked{
  constructor(private coursesSvc: CoursesService,private authSvc:AuthService){}
  isNavBarVisible:boolean=true;
  menuCatalog!:any[];
  isStudent!:boolean;

ngOnInit(): void {
  this.coursesSvc._isNavBarVisible.subscribe((status)=>{
  this.isNavBarVisible = status;
  })
}

ngAfterViewChecked(){

  let encryptedAuthLevel = this.authSvc.decryptedHandler();
  this.isStudent=encryptedAuthLevel=='professor'?false:true;
  this.menuCatalog=this.isStudent?menuCatalog:menuCatalogForPro;
 }
}
