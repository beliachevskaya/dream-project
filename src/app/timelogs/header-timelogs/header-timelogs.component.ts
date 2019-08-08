import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-timelogs',
  templateUrl: './header-timelogs.component.html',
  styleUrls: ['./header-timelogs.component.sass']
})
export class HeaderTimelogsComponent implements OnInit {
  timeNow = '';
  toggleFlag = true;
  time() {
    this.toggleFlag = false;
    const now = new Date();
    this.timeNow = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  }

  constructor() { }

  ngOnInit() {
  }

}
