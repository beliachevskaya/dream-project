import { Component, OnInit } from '@angular/core';
import { MyUserService, IUser } from '../myTest/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  currentUser: IUser;
  public user = {
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
    ],

    notificationPreference: {
      notificationSender: ['System', 'Email', 'Push', 'Slack'],
      notificationOptions: [
        {
          label: 'Timelogs are not filled for more then 24 hours',
          checked: true,
          sendTo: ['System']
        },
        {
          label: '1 week before deadline',
          checked: true,
          sendTo: ['Email', 'System', 'Push', 'Slack']
        },
        {
          label: 'Status of a project you’re assigned to has been changed',
          checked: true,
          sendTo: ['Slack']
        },
        {
          label: 'Submitted timesheet was rejected',
          checked: true,
          sendTo: ['System', 'Push']
        },
        {
          label: 'Submitted timesheet was approved',
          checked: false,
          sendTo: ['System']
        },
        {
          label: 'Your workload has been changed',
          checked: false,
          sendTo: ['System']
        },
        {
          label: 'Your role has been changed',
          checked: false,
          sendTo: ['System']
        },
        {
          label: 'User, invited by you, has joined your company',
          checked: false,
          sendTo: ['System']
        }
      ]
    }
  };
  constructor(private userService: MyUserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }
}
