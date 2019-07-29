import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.sass']
})
export class RestorePasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.authService.restorePassword(form.value.email);
  }

  ngOnInit() {
  }
}
