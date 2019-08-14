import { Component, OnInit } from '@angular/core';
import { MyUserService, Iuser } from './my.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

import { user1, user2, user3 } from './users';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.sass'],
  providers: [MyUserService]
})
export class MyComponent implements OnInit {
  currentUser: Iuser;

  constructor(private newService: MyUserService, private router: Router) {
    this.currentUser = { email: '' };
  }

  ngOnInit() {
    // this.newService.inserUser(this.user)
    // this.onSave();
  }

  onGet = () => {
    console.log('click');
    this.currentUser = this.newService.getUser(user1);
    console.log('my comp');
    console.log(this.currentUser);
    this.directHome();
  };

  onSave = () => {
    console.log('click');
    this.newService.regUser(user2).subscribe(user => (this.currentUser = user));
    console.log(this.currentUser);
    this.directHome();
  };

  // onGet = () => {
  //   console.log('click');
  //   this.newService
  //     .getUser(user1)
  //     .subscribe(async user => (this.currentUser = user));
  //   console.log(this.currentUser);
  //   this.directHome();
  // };

  directHome = () => {
    if (this.currentUser.email) this.router.navigate(['/']);
    else console.log('error');
  };
}
