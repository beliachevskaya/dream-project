import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.sass']
})
export class ProfileInfoComponent implements OnInit {
  @Input() currentUser: any;
  _user: any;
  projectList: any[];
  displayedColumns: string[] = ['name', 'role', 'workload'];
  workloadStep = ' h/week';

  @Input()
  set user(User: any) {
    if (User.projectList) {
      this.projectList = User.projectList;
    }
    this._user = User;
  }

  getTotalH = () =>
    this.projectList
      .map(t => t.proWorkload)
      .reduce((acc, value) => acc + value, 0);

  constructor() {}

  ngOnInit() {}
}
