import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  hide = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(submittedForm) {
    console.log(submittedForm.value);
  }
}
