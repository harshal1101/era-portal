import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private login:AngularFireAuth) {
    this.login.authState.subscribe(user=>console.log(user));
   }
  loginWithGoogle()
  {
   return this.login.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  loginWithFacebook(){
    return this.login.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }
  getCurrentUser()
  {
    return  this.login.authState;
  }

  
}
