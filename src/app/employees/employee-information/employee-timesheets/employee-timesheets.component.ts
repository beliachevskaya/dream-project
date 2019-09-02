import { Component, OnInit } from '@angular/core';
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
  // pending: [
  //   {
  //     day: 'Mon',
  //     projects: [{
  //       name: "Office",
  //       conments: [{ name: '#435: added localization on landing...', time: 2.3 }, { '#435: fix error #13': 1.5 }]
  //     }, {
  //       'Mifort Courses': [{ 'NgRx lection': 1.9 }]
  //     }, {
  //       Copses: [{ 'add new rules': 1.3 }]
  //     }, {
  //       'ADF clone': [{ 'reload server': 0.5 }]
  //     }]
  //   },
  // {
  //   day: 'Tue',
  //   projects: [{
  //     Office: [{ '#435: added localization on landing...': 5.3 }, { '#435: fix error #13': 1.5 }]
  //   }, {
  //     'Mifort Courses': [{ 'NgRx lection': 1.9 }]
  //   }]
  // },
  // {
  //   day: 'Wed',
  //   projects: [{
  //     Office: [{ '#435: added localization on landing...': 2.3 }, { '#435: fix error #13': 1.5 }]
  //   }, {
  //     'Mifort Courses': [{ 'NgRx lection': 1.9 }]
  //   }, {
  //     Copses: [{ 'add new rules': 2.3 }]
  //   }, {
  //     'ADF clone': [{ 'reload server': 0.5 }]
  //   }]
  // },
  // {
  //   day: 'Thu',
  //   projects: [{
  //     Office: [{ '#435: added localization on landing...': 2.3 }, { '#435: fix error #13': 1.5 }]
  //   }, {
  //     'Mifort Courses': [{ 'NgRx lection': 1.9 }]
  //   }, {
  //     Copses: [{ 'add new rules': 1.3 }]
  //   }, {
  //     'ADF clone': [{ 'reload server': 0.5 }]
  //   }]
  // },
  // {
  //   day: 'Fri',
  //   projects: [{
  //     Office: [{ '#435: added localization on landing...': 2.3 }, { '#435: fix error #13': 1.5 }]
  //   }, {
  //     Copses: [{ 'add new rules': 1.3 }]
  //   }, {
  //     'ADF clone': [{ 'reload server': 0.5 }]
  //   }]
  // },
  // {
  //   day: 'Sat',
  //   projects: []
  // },
  // {
  //   day: 'Sun',
  //   projects: []
  // },
  // ],
  // approved: [{
  //   Mon:
  // },{

  // }]
}

@Component({
  selector: 'app-employee-timesheets',
  templateUrl: './employee-timesheets.component.html',
  styleUrls: ['./employee-timesheets.component.sass']
})
export class EmployeeTimesheetsComponent implements OnInit {
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
    // console.log(timelog.pending.reduce((acc, item) => {
    //   console.log(item);
    //   acc.push(item.day);
    // }, ['Comment']));
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
