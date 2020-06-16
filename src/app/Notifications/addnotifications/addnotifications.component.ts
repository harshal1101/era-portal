import { Notification } from './../models/notification.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import{NotificationService} from 'src/app/Notifications/services/notification.service';
import{mergeMap, map} from 'rxjs/operators';





@Component({
  selector: 'app-addnotifications',
  templateUrl: './addnotifications.component.html',
  styleUrls: ['./addnotifications.component.css']
})
export class AddnotificationsComponent implements OnInit {
  regiForm:FormGroup;
  notifications:any[];
  notification:Notification;
  constructor(private fb:FormBuilder,private serviceNotification:NotificationService,
    public dialogRef:MatDialogRef<AddnotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public idNotification) {
    this.regiForm=this.fb.group({
      'aheading':[null,Validators.required],
      'content':[null,Validators.required]
    })
   }

  ngOnInit()  {
    if(this.idNotification)
    {
      this.serviceNotification.getAllNotifications()
                              .pipe(
                                mergeMap(notifications=>this.serviceNotification.getNotificationbyId(this.idNotification.id).pipe(
                                  map(notification=>{
                                    return([notifications,notification])
                                  })
                                ))).subscribe(([notifications,notification])=>{
                                  this.notifications=notifications as any[];
                                  this.notification=notification as Notification;
                                  this.initalizeNotification(notification);
                                })
    }
  }
  initalizeNotification(notification)
  {
    this.regiForm = this.fb.group({  
      'aheading' : [ notification?notification.aheading:null,Validators.required],  
      'content' : [notification?notification.content:null, Validators.required] 
      
    });

  }
    onSubmit(form)
      {
         console.log(form);
         if(this.regiForm.valid)
        {
          let notification:Notification={
            id:this.idNotification?this.idNotification.id:'',
            aheading:form.aheading,
            content:form.content,

        }
        if(!this.idNotification)
        {
        this.serviceNotification.AddNotification(notification).then(()=>{
          this.dialogRef.close();
        
        });
        }
        else{
          this.serviceNotification.updateNotification(notification).then(()=>{
            this.dialogRef.close();

          });
        }

  
    }
   }
  }
