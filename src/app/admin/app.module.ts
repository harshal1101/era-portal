import { MatDialogModule } from '@angular/material/dialog';

import { AppModuleNotifications } from './../Notifications/app.module';



import { NotificationComponent } from './../Notifications/notification/notification.component';
import { MaterialModule } from './../material-ui.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AdminComponent],
    imports:[
        MaterialModule,
        AppModuleNotifications,
        MatDialogModule
        ],
    exports:[AdminComponent],
    entryComponents:[NotificationComponent],
    providers:[],
    bootstrap:[]
})
    export class AppModuleAdmin{}
