import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { MaterialModule } from './material-ui.module';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import{AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './Notifications/notification/notification.component';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './exam/exam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddnotificationsComponent } from './Notifications/addnotifications/addnotifications.component';
import { SignupComponent } from './signup/signup.component';
import { User } from './services/user.model';
import {AuthService} from './services/auth.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './dashboard/dashboard.component';
//import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    LoginComponent,
    NotificationComponent,
    AdminComponent,
    ExamComponent,
    AddnotificationsComponent,
    SignupComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
