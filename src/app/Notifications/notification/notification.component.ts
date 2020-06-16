import { NotificationService } from './../../Notifications/services/notification.service';





import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications:any[];

  constructor(private serviceNotification:NotificationService) { }

  ngOnInit()  {
    this.serviceNotification.getAllNotifications()
                            .subscribe(notifications=>{
                              this.notifications=notifications;
                              console.log(this.notifications);

  });

}
}