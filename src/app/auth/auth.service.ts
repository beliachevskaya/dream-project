import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgZone } from '@angular/core';

import { MyUserService } from '../myTest/user.service';
import { CompanyService } from '../myTest/company.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  errorMessage: string;
  errorCode: string;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private ngZone: NgZone,
    private userService: MyUserService,
    private companyService: CompanyService
  ) { }

  registerUser(authData: AuthData) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.userService.registerUser(
          authData.name,
          result.user.email,
          result.user.uid
        );
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = error.message;
        this.snackBar.open(this.errorMessage, 'OK', {
          duration: 10000,
          panelClass: 'error'
        });
      });
  }

  login(authData: AuthData) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => this.userService.getUser(authData.email))
      .then(() => this.authSuccessfully())
      .catch(error => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
        if (this.errorCode === 'auth/wrong-password') {
          this.snackBar.open('Wrong password', 'OK', {
            duration: 5000,
            panelClass: 'error'
          });
        } else {
          this.snackBar.open(this.errorMessage, 'OK', {
            duration: 5000,
            panelClass: 'error'
          });
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
    this.ngZone.run(() => setTimeout(() => this.router.navigate(['/']), 1000));
  }

  restorePassword(email: string) {
    return this.angularFireAuth.auth
      .sendPasswordResetEmail(email)
      .then(result => {
        this.snackBar.open(
          'A password reset link has been sent to your email address',
          'OK',
          {
            duration: 10000,
            panelClass: 'success'
          }
        );
      })
      .catch(error => {
        this.snackBar.open(
          'An error occurred while attempting to reset your password',
          'OK',
          {
            duration: 10000,
            panelClass: 'error'
          }
        );
      });
  }

  setNewPassword(authData: AuthData) {
    return this.angularFireAuth.auth.currentUser
      .updatePassword(authData.password)
      .then(result => {
        this.snackBar.open('Password changed', 'OK', {
          duration: 10000,
          panelClass: 'success'
        });
        this.authSuccessfully();
      });
  }

  googleSignIn() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth.auth.signInWithPopup(provider).then(res => {
        this.userService.registerUser(
          res.user.displayName,
          res.user.email,
          res.user.uid,
          res.user.photoURL
        );
        resolve(res);
        reject('error')
        this.authSuccessfully();
      });
    });
  }
}
