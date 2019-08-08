import {Component, Input, OnInit} from '@angular/core';
import {Timesheet} from '../timelog/timelog.component';
import {Marks} from '../timelog/timelog.component';

@Component({
  selector: 'app-timelog-select',
  templateUrl: './timelog-select.component.html',
  styleUrls: ['./timelog-select.component.sass']
})
export class TimelogSelectComponent implements OnInit {

  constructor() {
  }

  @Input()
  marks: Marks[];

  @Input()
  timesheets: Timesheet;

  mark: object = null;

  ngOnInit() {
    if (this.timesheets.project !== '') {
    this.mark = this.marks.filter((elem) => {
      if (elem.name === this.timesheets.project) {
        return elem;
      }
    })[0];
    }
    console.log(this.mark);
  }

}
