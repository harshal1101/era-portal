import { Component,OnInit } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 notification:any[];

  constructor(private db:AngularFireDatabase)
  {
  
  db.list('/notifications').valueChanges()
                            .subscribe(notification=>{
                              this.notification=notification;
                              console.log(notification);
                            });
  }
  
}
