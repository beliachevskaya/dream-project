import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {
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
