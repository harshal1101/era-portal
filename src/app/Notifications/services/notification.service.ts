import { Notification } from './../models/notification.model';
import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import{map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification:AngularFireList<any>;
  notifications:Observable<any[]>;

  constructor(private db:AngularFireDatabase) { 

  
  this.notification=db.list('/notifications');
  this.notifications=this.notification.snapshotChanges().pipe(
              map(changes=>
                    changes.map(c=>(
                      {key:c.payload.key,...c.payload.val()
                      }))
                      
                  ));
                    }
  getAllNotifications(){
    return this.notifications;
  }
  AddNotification(notifications:Notification)
  {
    return this.db.list('/notifications/').push({
      aheading:notifications.aheading,
      content:notifications.content

    
    })
  }
  getNotificationbyId(uid:string){
   return  this.db.object('/notifications/'+uid)
                  .snapshotChanges()
                  .pipe(
                    map(notification=>{
                      let obj:any=notification.payload.val();
                      let notificationTemp:Notification={
                        id:notification.key,
                        aheading:obj.aheading,
                        content:obj.content
                      }
                      return notificationTemp
                    })
                  )
              
  }
  updateNotification(notifications:Notification)
   {
     return this.db.object('/notifications/'+notifications.id).update({
      aheading:notifications.aheading,
      content:notifications.content
      
      
     }
);
                  
}
deleteNotification(id:string)
   {
     return this.db.object('/notifications/'+id).remove();
   }
}
