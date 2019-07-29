import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  errorMessage: string;
  errorCode: string;
  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = error.message;
        alert(this.errorMessage);
      });
    }

  login(authData: AuthData) {
    this.angularFireAuth.auth
    .signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      this.errorCode = error.code;
      this.errorMessage = error.message;
      if (this.errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(this.errorMessage);
      }
    });
}

  logout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/next-page']);
  }
  getAuth() {
    return this.angularFireAuth.auth;
  }

  restorePassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email)
    .then(() => alert('A password reset link has been sent to your email address'),
    (rejectionReason) => alert(rejectionReason))
  .catch(e => alert('An error occurred while attempting to reset your password'));
  }
}
