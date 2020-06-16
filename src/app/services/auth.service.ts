import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/storage';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { finalize } from 'rxjs/operators';
//import {FirebaseProvider} from 'angular-firebase';
//var firebase = require('firebase');
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: Observable<User>;
public updateu;
public updatec;
//public db  = firebase.firestore();
ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string | null>;
  uploadProgress: Observable<number>;

  constructor(private afStorage:AngularFireStorage,public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) { 
      this.user$ = this.auth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    
    }
    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      var str = "" + 1
      var pad = "00000"
      var ans = pad.substring(0, pad.length - str.length) + str
      ans = parseInt(ans)+1 + "";
    

//user.sendEmailVerification().then(function() {
  // Email sent.
//}).catch(function(error) {
  // An error happened.
//});
//this.router.navigate['/dashboard'];
      return this.updateUserData(credential.user);

      
    }
    async faceSignin() {
      const provider = new auth.FacebookAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
     // this.router.navigate['/dashboard'];
      return this.updateUserData(credential.user);
      
     // return this.upload(credential.user);
    }
    //async sendEmailVerification() {
           //this.router.navigate(['admin/verify-email']);
  //}
  
    public updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
     
    
      var check ="1";
    const data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL,
        //CollegeName: null,
        //unique: ans
      } 
      
  this.updateu = {...data};
  this.updatec = data;
  console.log(this.updateu.displayName)
      return userRef.set(data, { merge: true })
      //ans = parseInt(ans)+1 + "";
  
    }
  
    async signOut() {
      await this.auth.signOut();
      this.router.navigate(['/']);
      
    
    }
    lete()
    {
      delete this.updateu.displayName;
      this.updateu.displayName  = "harsh"
      this.updatec= this.updateu
      this.afs.doc('users/'+ this.updateu.uid).update(this.updatec)
      //console.log(this.updatec.displayName)
    }
    uploadreq()
    {
     // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const update =
      {
        displayName: document.getElementById("i-name").nodeValue,
        collegeName: document.getElementById("i-clgname").nodeValue,

        

      }
      
      return this.upload(update)
      
    }

    upload(updatei)
  {
   /*this.auth.currentUser.then(function(successMessage) { 
    //success handler function is invoked 
    
     console.log(successMessage); 
 }, function(errorMessage) { 
     console.log(errorMessage); 
 }) */

 // this.auth.updateCurrentUser()
    
    //var user = firebase.auth().currentUser;
    /*const id  = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    //this.downloadURL = this.task.getDownloadURL();
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL() ))
    .subscribe();
    //console.log(this.updatec.displayName)*/
   //this.db.collection("users"),get
   

 /* dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.item.avatar = result.link;
    }
  });*/
  //var user = firebase.auth().currentUser;
    
}
}