import { Component, OnInit } from '@angular/core';
import { MyUserService, Iuser } from '../myTest/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  currentUser: Iuser;
  name = 'Profile One';
  public User = {
    registered: true,
    name: 'Profile One',
    role: 'Employee',
    workload: 40,
    email: 'pro1@vn.ed',
    tel: '+375 29 1111111',
    projectList: [
      {
        proName: 'Office',
        proRole: 'Employee',
        color: '#FFD600',
        proWorkload: 24
      },
      {
        proName: 'Mifort Courses',
        proRole: 'Project Manager',
        color: '#FF0000',
        proWorkload: 6
      },
      {
        proName: 'Office',
        proRole: 'Employee',
        color: '#00C537',
        proWorkload: 8
      },
      {
        proName: 'Copses',
        proRole: 'Project Manager',
        color: '#0047FF',
        proWorkload: 2
      }
    ]
  };
  constructor(private userService: MyUserService) {}

  ngOnInit() {
    this.currentUser = this.userService.get();
  }
}
