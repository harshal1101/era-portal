
import { NotificationService } from 'src/app/Notifications/services/notification.service';




import { NotificationComponent } from './../Notifications/notification/notification.component';
import { AddnotificationsComponent } from '../Notifications/addnotifications/addnotifications.component';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  notifications:any[];
  displayedColumns: string[] = ['aheading','content','actions'];

  constructor(private serviceNotification:NotificationService, public serviceDialog: MatDialog) { }
  
  

  ngOnInit() {
    this.serviceNotification.getAllNotifications()
                            .subscribe(notifications=>this.notifications=notifications)
  }
  AddNotification()
  {
    this.serviceDialog.open(AddnotificationsComponent,{
      width:'650px'
    })
  }
  Edit(row){
    
    this.serviceDialog.open(AddnotificationsComponent,{
      width:'650px',data:{id:row.key}
    })

  }
  Delete(row)
  {
    if(window.confirm('Kar doon,pakka?'))this.serviceNotification.deleteNotification(row.key);
  }
 
}
