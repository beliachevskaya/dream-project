import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.sass']
})
export class SetNewPasswordComponent implements OnInit {
  hide = false;

  constructor(
    private authService: AuthService
    ) {}

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.authService.setNewPassword({
      password: form.value.password,
      email: form.value.email
    });
  }
}
