import {Component, Input, OnInit} from '@angular/core';
import {Timesheet} from '../timelog-day/timelog-day.component';
import {Project} from '../timelog-day/timelog-day.component';

@Component({
  selector: 'app-timelog-select',
  templateUrl: './timelog-select.component.html',
  styleUrls: ['./timelog-select.component.sass']
})
export class TimelogSelectComponent implements OnInit {

  constructor() {
  }

  @Input()
  projects: Project[];

  @Input()
  timesheets: Timesheet;

  project: object = null;

  ngOnInit() {
    if (this.timesheets.project !== '') {
    this.project = this.projects.filter((elem) => {
      if (elem.name === this.timesheets.project) {
        return elem;
      }
    })[0];
    }
  }

}
