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
// canActivate: [AuthGuard]

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
   { path: 'all-courses', component: CoursesListComponent, },
   { path: 'all-students', component: StudentListComponent, },
   { path: 'all-attendees', component: ClassAttendeesListComponent, },
   { path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuard] },
   { path: 'buy-courses', component: BuyCoursesComponent, canActivate: [AuthGuard] },

   { path: 'setting', component: SettingComponent,  },

  { path: 'sign-in', component: SignInComponent },
   { path: '', component: SignInComponent, pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RouterLinkActive]
})
export class AppRoutingModule { }
