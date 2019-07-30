import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.sass']
})
export class SetNewPasswordComponent implements OnInit {
  hide = false;
  newPassword: string;

  constructor(private router: Router, private authService: AuthService, private angularFireAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    return this.angularFireAuth.auth.currentUser.updatePassword(form.value.password)
    .then(() => { alert('Password changed');
                  this.router.navigate(['/']);
    })
    .catch(error => {
      // An error happened.
    });
  }
}
