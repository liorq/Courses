import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SettingComponent } from './pages/setting/setting.component';
import { ClassAttendeesListComponent } from './pages/class-attendees-list/class-attendees-list.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { BuyCoursesComponent } from './pages/buy-courses/buy-courses.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { AuthSignInGuard } from './core/guards/auth-sign-in.guard';
import { AuthLevelGuard } from './core/guards/auth-level.guard';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent,canActivate: [AuthSignInGuard] },
   { path: 'all-courses', component: CoursesListComponent, canActivate: [AuthGuard,AuthLevelGuard]},
   { path: 'all-students', component: StudentListComponent, canActivate: [AuthGuard,AuthLevelGuard]},
   { path: 'all-attendees', component: ClassAttendeesListComponent, canActivate: [AuthGuard,AuthLevelGuard]},
   { path: 'report-attendees', component: DatePickerComponent,canActivate: [AuthGuard]},
   { path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuard] },
   { path: 'buy-courses', component: BuyCoursesComponent, canActivate: [AuthGuard] },
   { path: 'setting', component: SettingComponent,  canActivate: [AuthGuard]},
   { path: 'sign-in', component: SignInComponent ,canActivate: [AuthSignInGuard]},
   { path: '', component: SignInComponent, pathMatch: 'full',canActivate: [AuthSignInGuard] },
   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RouterLinkActive]
})
export class AppRoutingModule { }
