import { AfterViewInit,Component, OnInit,ElementRef, ViewChild } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from './../services/auth.service';
import { User } from './../services/user.model';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';
//import {FirebaseProvider} from 'angular-firebase';
//import { userInfo } from 'os';
//import { userInfo } from 'os';
//import {AuthService} from './services/auth.service';
//import { userInfo } from 'os';
;
//import { User } from './user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  

})

export class SignupComponent implements OnInit {
  title = 'firebase1';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string | null>;
  uploadProgress: Observable<number>;
  user$: Observable<User>;
  public i=1;
public db = firebase.firestore();
//console.log(this.user.photoURL)
  constructor( private firestore: AngularFirestore, public auth: AuthService, private afStorage:AngularFireStorage, private afs: AngularFirestore,public router: Router) {

  }
 
  ngOnInit()
  {

  }
  clickMessage = '';
  check()
  {
    var user = firebase.auth().currentUser;
   var photu =  user.photoURL;
   console.log(photu)
  }

  onClickMe() {
    //this.clickMessage = 'You are my hero!';
    document.getElementById("user-name").style.visibility ="visible";
    document.getElementById("user-email").style.visibility ="visible";
    document.getElementById("clg-name").style.visibility ="visible";
    document.getElementById("clg-city").style.visibility ="visible";
    document.getElementById("choose-file").style.visibility ="visible";
    
//(change)="auth.upload($event)"
  }
  kMessage = '';
 ch(){
            
  /*this.fb.getDataArr('users','value',{limitToFirst:2}).then((v)=>{
    console.log(v)
    
  });*/
  //console.log(value);
  //console.log(c);
  //let c:string = value;
  //console.log(value.type)
  //var value = document.getElementById("txtt")
  var user  = firebase.auth().currentUser;

  var nameu = (<HTMLInputElement>document.getElementById("namet")).value; 
  var emailu =(<HTMLInputElement>document.getElementById("emailt")).value; 
  var photou = (<HTMLInputElement>document.getElementById("choose-file")).value; 
  var clgnameu =(<HTMLInputElement>document.getElementById("clg-namet")).value;
  var clgcityu =(<HTMLInputElement>document.getElementById("clg-cityt")).value

  var save  = user.uid
  console.log("users/" +save)
  if(clgnameu)
  {
  var docref = firebase.firestore().doc("users/" + save);
  docref.update(
    {
      CollegeName: clgnameu
    }
  ).then(function()
  {
    console.log("success");
  }).catch(function(error)
  {
    console.log("error",error)
  })
  }
  if(clgcityu)
  {
  var docref = firebase.firestore().doc("users/" + save);
  docref.update(
    {
      CollegeCity: clgcityu
    }
  ).then(function()
  {
    console.log("success");
  }).catch(function(error)
  {
    console.log("error",error)
  })
  }
  //console.log(docref)
  console.log(clgnameu)
  if(nameu&&photou)
  {
  firebase.auth().onAuthStateChanged(function (user) {

      user.updateProfile({
        displayName: nameu,
        photoURL: photou
        //photoURL: unit1
      })      
      if (user) {
        console.log(user)
      } else {
      
      }
    });
    
  }
  else if(nameu&&(!photou))
  {
  firebase.auth().onAuthStateChanged(function (user) {

      user.updateProfile({
        displayName: nameu,
        photoURL: user.photoURL
        //photoURL: unit1
      })      
      if (user) {
        console.log(user)
      } else {
      
      }
    });
    
  }
  else if((!nameu)&&(photou))
  {
  firebase.auth().onAuthStateChanged(function (user) {

      user.updateProfile({
        displayName: user.displayName,
        photoURL: photou
        //photoURL: unit1
      })      
      if (user) {
        console.log(user)
      } else {
      
      }
    });
    
  }
  else 
  {
  firebase.auth().onAuthStateChanged(function (user) {

      user.updateProfile({
        displayName: user.displayName,
        photoURL: user.photoURL
        //photoURL: unit1
      })      
      if (user) {
        console.log(user)
       
      } else {
      
      }
    });
    
  }
  //console.log()
  /*if(emailu)
  {
  firebase.auth().onAuthStateChanged(function (user) {

    user.updateEmail(emailu).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
    });
  }
  var save  = user.uid;
  var docref = firebase.firestore().doc("users/"+ save);
  if(clgnameu)
  {
  docref.set(
    {
CollegeName: clgnameu
    }
  )
  
  console.log(clgnameu)
}*/
 
     }
    

     myFunction()
     {
       

       var check = document.getElementById("navi").style.visibility
       document.getElementById("togbutton").classList.toggle("change");
      if(this.i%2) document.getElementById("navi").style.visibility ="visible";
      if(this.i%2==0) document.getElementById("navi").style.visibility ="hidden";
      this.i++;
      console.log(this.i%2);
     }
     hoja()
     {
      firebase.auth().onAuthStateChanged(function(user) {
        
          // User is signed in.
          if(user)
          {
            console.log('HELLO BOY');
            this.router.navigate('./../dashboard');
          }
          else 
          {
            console.log('NO HELLO BOY');
          }
          //this.router.navigateByUrl('../dashboard');
         
          // No user is signed in.
        
      });
      //console.log("hello bou");
     }
  navbar()
  {
    document.getElementById("navi").style.visibility = "visible";
  }
  /*upload(event)
  {
    const id  = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    //this.downloadURL = this.task.getDownloadURL();
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL() ))
    .subscribe();
    
  } */
  
  
  
}

//onclick="style.display = 'none'"