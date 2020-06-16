import { NotificationComponent } from './Notifications/notification/notification.component';

import { ExamComponent } from './exam/exam.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '' , redirectTo: 'navbar',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path:'admin',component:AdminComponent},
  {path:'notification',component:NotificationComponent},
  {path:'exam',component:ExamComponent},
  {path:'navbar', component:NavbarComponent},
  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
