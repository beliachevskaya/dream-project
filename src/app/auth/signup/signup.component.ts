import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  hide = true;

  constructor(
    private authService: AuthService,
    private angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    });
  }

  socialSignIn() {
    this.authService.googleSignIn();
  }
}
