import { Component, OnInit } from '@angular/core';
import { MyUserService, IUser } from './user.service';
import { Router } from '@angular/router';

import { user1, user2, user3 } from './users';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.sass']
})
export class MyComponent implements OnInit {
  constructor(private newService: MyUserService, private router: Router) { }

  ngOnInit() {
    // this.newService.getUser(user2.email);
  }

  onGet = () => {
    this.newService.getUser('mlalx@tut.by');
    // this.newService.get();
    // console.log('get user');
    // console.log(this.newService.get());
  };

  onSave = () => {
    this.newService.regUser(user2);
    // console.log('User registered');
    // console.log(this.newService.get());
  };

  directHome = () => {
    console.log('run home');
    this.router.navigate(['/']);
  };
}
