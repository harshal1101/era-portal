
import { NotificationComponent } from 'src/app/Notifications/notification/notification.component'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-ui.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [NotificationComponent],
    imports: [
      MaterialModule,
      CommonModule,
      
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleNotifications{ }

