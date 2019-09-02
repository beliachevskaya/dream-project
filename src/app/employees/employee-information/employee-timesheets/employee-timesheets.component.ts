import { Component, OnInit, Input } from '@angular/core';
export const timelog = {
  table: [
    {
      name: "Office",
      Comment: '#435: added localization on landing...',
      Mon: 1.9,
      Tue: 0,
      Wed: 3.6,
      Thu: 2.5,
      Fri: 1.2,
      Sat: 0,
      Sun: 0,
    },
    {
      name: "Mifort Courses",
      Comment: 'NgRx lection',
      Mon: 1.2,
      Tue: 0,
      Wed: 2.6,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    },
    {
      name: "Copses",
      Comment: 'add new rules',
      Mon: 3.2,
      Tue: 1,
      Wed: 1.6,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    },
  ]
}

@Component({
  selector: 'app-employee-timesheets',
  templateUrl: './employee-timesheets.component.html',
  styleUrls: ['./employee-timesheets.component.sass']
})
export class EmployeeTimesheetsComponent implements OnInit {
  @Input() abilityForget: boolean;

  public data = timelog.table;
  public column =
    ['Comment',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'];


  constructor() { }

  ngOnInit() {
    // this.createColumn(timelog);
  }

  createColumn(timelog) {
    const arr = ['Comment'];
    timelog.pending.forEach((item) => {
      arr.push(item.day);
    });
    return arr;
  }

  onClick() {
    console.log('click');

  }
}
