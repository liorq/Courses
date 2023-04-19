import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GenericTableComponent } from './shared/generic-table/generic-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './shared/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SideBarSectionComponent } from './shared/side-bar-section/side-bar-section.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassAttendeesListComponent } from './pages/class-attendees-list/class-attendees-list.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { BuyCoursesComponent } from './pages/buy-courses/buy-courses.component';
import { LoadingIconComponent } from './shared/loading-icon/loading-icon.component';
import { reportAttendanceComponent } from './shared/report-attendace/report-attendace.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    GenericTableComponent,
    MainComponent,
    PageNotFoundComponent,
    SettingComponent,
    SignUpComponent,
    SignInComponent,
    SideBarSectionComponent,
    StudentListComponent,
    CoursesListComponent,
    ClassAttendeesListComponent,
    MyCoursesComponent,
    BuyCoursesComponent,
    LoadingIconComponent,
    reportAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,HttpClientModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
