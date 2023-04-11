import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
   { path: 'all-courses', component: CoursesListComponent, canActivate: [AuthGuard] },
   { path: 'all-students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
   { path: '', component: SignInComponent, pathMatch: 'full' },
     { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
